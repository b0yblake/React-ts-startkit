import axios, { AxiosResponse } from 'axios';
import { getToken } from '../../utils/appLocalStorage';
// import { ProjectListInterface } from "../types";

// Initial axios with interceptors bearer
const baseConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
};
const instance = axios.create(baseConfig);
instance.interceptors.request.use(
  (config) => {
    const jwtMethod = `Bearer ${getToken()}`;
    if (jwtMethod) config.headers.Authorization = jwtMethod;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Initial repository pattern
const Repository = (BASE_URL: string) => ({
  get: (params: any): Promise<AxiosResponse<any>> =>
    instance.get(BASE_URL, { params: { ...params } }),
  getOne: (id: number | string, options = {}): Promise<AxiosResponse<any>> =>
    instance.get(`${BASE_URL}/${id}`, options),
  create: (params: any, options = {}): Promise<AxiosResponse<any>> =>
    instance.post(BASE_URL, { ...params }, options),
  update: (
    id: number | string,
    params: any,
    options = {},
  ): Promise<AxiosResponse<any>> =>
    instance.patch(`${BASE_URL}/${id}`, params, options),
  updateAll: (params: any, options = {}): Promise<AxiosResponse<any>> =>
    instance.put(`${BASE_URL}/`, params, options),

  delete: (id: number | string, options = {}): Promise<AxiosResponse<any>> =>
    instance.delete(`${BASE_URL}/${id}`, options),
});

export default Repository;
