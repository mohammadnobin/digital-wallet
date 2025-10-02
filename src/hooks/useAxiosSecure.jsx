"use client";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosSecure = () => {
  const { user, logOut, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user?.accessToken) {
      const requestInterceptor = axiosSecure.interceptors.request.use(
        (config) => {
          config.headers.authorization = `Bearer ${user.accessToken}`;
          return config;
        },
        (error) => Promise.reject(error)
      );

      const responseInterceptor = axiosSecure.interceptors.response.use(
        (res) => res,
        (error) => {
          const status = error.response?.status;
          if (status === 403) {
            router.push("/forbidden");
          } else if (status === 401) {
            logOut()
              .then(() => router.push("/login"))
              .catch(() => {});
          }
          return Promise.reject(error);
        }
      );

      return () => {
        axiosSecure.interceptors.request.eject(requestInterceptor);
        axiosSecure.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, logOut, router]);

  return axiosSecure;
};

export default useAxiosSecure;

















