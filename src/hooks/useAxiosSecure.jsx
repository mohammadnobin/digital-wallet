// import axios from "axios";
// import { useRouter } from "next/navigation";
// import useUser from "./useUser";

// const axiosSecure = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
// });

// const useAxiosSecure = () => {
//   const user = useUser();
//   const router = useRouter();

//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       (config) => {
//         config.withCredentials = true;
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseInterceptor = axiosSecure.interceptors.response.use(
//       (res) => res,
//       (error) => {
//         const status = error.response?.status;
//         if (status === 403) {
//           router.push("/not-found");
//         } else{
//             router.push("/login");
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       axiosSecure.interceptors.request.eject(requestInterceptor);
//       axiosSecure.interceptors.response.eject(responseInterceptor);
//     };


//   return axiosSecure;
// };

// export default useAxiosSecure;






import axios from "axios";
import { useRouter } from "next/navigation";
import useUser from "./useUser";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const useAxiosSecure = () => {
  const user = useUser();
  const router = useRouter();

  // ✅ Request interceptor
  const requestInterceptor = axiosSecure.interceptors.request.use(
    (config) => {
      config.withCredentials = true;

      // ✅ user থেকে token পেয়ে header-এ সেট করা
      const token = user?.accessToken || user?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  // ✅ Response interceptor
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

  // ✅ Cleanup function for interceptors
  return () => {
    axiosSecure.interceptors.request.eject(requestInterceptor);
    axiosSecure.interceptors.response.eject(responseInterceptor);
  };

  // ✅ Return the axios instance
  return axiosSecure;
};

export default useAxiosSecure;
