// import axios from "axios";
// import { useRouter } from "next/navigation";

// const axiosSecure = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL,
//   withCredentials: true, // কুকি সবসময় পাঠানোর জন্য
// });

// const useAxiosSecure = () => {
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



// lib/axiosSecure.js
import axios from "axios";

const axiosSecure = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
  },
});

axiosSecure.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 403) {
      console.log("Access Forbidden (403)");
    } else if (status === 401) {
      console.log("Unauthorized (401)");
    } else {
      console.log("Server Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosSecure;
