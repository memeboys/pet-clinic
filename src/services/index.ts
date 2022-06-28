import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const BASE_URL = 'http://91.241.64.154:8080/api';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const { headers } = config;
    if (headers) {
      headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    return config;
  },
);
