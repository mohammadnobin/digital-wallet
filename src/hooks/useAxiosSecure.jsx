'use client';
import axios from "axios";
import { useRouter } from "next/navigation";
import useUser from "./useUser";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosSecure = () => {
  const user = useUser();
  console.log(user?.accessToken);
  const router = useRouter();
  const requestInterceptor = axiosSecure.interceptors.request.use(
    (config) => {
      config.withCredentials = true;
      const token = user?.accessToken;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
  const responseInterceptor = axiosSecure.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;

      if (status === 403) {
        router.push("/not-found");
      } else if (status === 401) {
        router.push("/login");
      }

      return Promise.reject(error);
    }
  );
  useEffect(() => {
    return () => {
      axiosSecure.interceptors.request.eject(requestInterceptor);
      axiosSecure.interceptors.response.eject(responseInterceptor);
    };
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
