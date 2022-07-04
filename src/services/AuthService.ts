import { AxiosResponse } from 'axios';
import { AuthResponse, RegisterDto, ClientDto } from '../types/AuthDTO';
import { axiosInstance } from './index';

export default class AuthService {
  static async loginUser (username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post('/auth', { username, password });
  }

  static async createNewUser (data: RegisterDto): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<ClientDto> {
    return axiosInstance.get('/client');
  }
}
