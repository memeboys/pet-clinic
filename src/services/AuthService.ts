import { AxiosResponse } from 'axios';
import { AuthRequest, AuthResponse, RegisterDto } from '../types/AuthDTO';
import { axiosInstance } from './index';

export default class AuthService {
  static async loginUser (data: AuthRequest): Promise<AxiosResponse<AuthRequest>> {
    return axiosInstance.post('/auth', data);
  }

  static async createNewUser (data: RegisterDto): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.get('/client');
  }
}
