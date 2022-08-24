import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import { NewsData, ManagerNewsResponseDto } from '../../types/Manager/NewsDTO';
import { NewsDTO } from '../../types/NewsDTO';

export default class NewsService {
  static async createNews (data: NewsDTO): Promise<AxiosResponse<ManagerNewsResponseDto>> {
    return axiosInstance.post('/manager/news', data);
  }

  static async getAllNews (): Promise<AxiosResponse<ManagerNewsResponseDto>> {
    return axiosInstance.get('/manager/news');
  }

  static async getNewsById (id: number): Promise<AxiosResponse<ManagerNewsResponseDto>> {
    return axiosInstance.get(`/manager/news/${id}`);
  }

  static async deleteNews (id: number): Promise<void> {
    return axiosInstance.delete(`/manager/news/${id}`);
  }

  static async updateNews (id: number, data: NewsData): Promise<AxiosResponse<ManagerNewsResponseDto>> {
    return axiosInstance.put(`/manager/news/${id}`, data);
  }
}
