import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import { NewsRequest, NewsResponse } from '../../types/ManagerDTO';

export default class NewsService {
  static async createNews (data: NewsRequest): Promise<AxiosResponse<NewsResponse>> {
    return axiosInstance.post('/manager/news', data);
  }

  static async getAllNews (): Promise<AxiosResponse<NewsResponse>> {
    return axiosInstance.get('/manager/news');
  }

  static async getNewsById (id: number): Promise<AxiosResponse<NewsResponse>> {
    return axiosInstance.get(`/manager/news/${id}`);
  }

  static async deleteNews (id: number): Promise<void> {
    return axiosInstance.delete(`/manager/news/${id}`);
  }

  static async updateNews (id: number, data: NewsRequest): Promise<AxiosResponse<NewsResponse>> {
    return axiosInstance.put(`/manager/news/${id}`, data);
  }
}
