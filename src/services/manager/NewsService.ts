import { AxiosResponse } from 'axios';
import { NewsRequestDto, NewsDto } from '../../types/NewsDTO';
import { axiosInstance } from '../index';

export default class NewsService {
  static async createNews (data: NewsRequestDto): Promise<AxiosResponse<NewsDto>> {
    return axiosInstance.post('/manager/news', data);
  }

  static async getAllNews (): Promise<AxiosResponse<NewsDto>> {
    return axiosInstance.get('/manager/news');
  }

  static async getNewsById (id: number): Promise<AxiosResponse<NewsDto>> {
    return axiosInstance.get(`/manager/news/${id}`);
  }

  static async updateNews (id: number, data: NewsRequestDto): Promise<AxiosResponse<NewsDto>> {
    return axiosInstance.put(`/manager/news/${id}`, data);
  }

  static async deleteNews (id: number): Promise<void> {
    return axiosInstance.delete(`/manager/news/${id}`);
  }
}
