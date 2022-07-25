import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';
import { NewsDTO } from '../types/NewsDTO';

export default class NewsService {
  static async createNews (data:NewsDTO):Promise<AxiosResponse<NewsDTO>> {
    return axiosInstance.post('/manager/news', data);
  }
}
