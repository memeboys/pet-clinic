import { AxiosResponse } from 'axios';
import {
  AuthRequest, AuthResponse, RegisterDto,
} from '../types/AuthDTO';
import { ClientDto } from '../types/ClientDTO';
import { axiosInstance } from './index';

export default class AuthService {
  static async loginUser (data: AuthRequest): Promise<AxiosResponse<AuthResponse>> {
    return axiosInstance.post('/auth', data);
  }

  static async createNewUser (data: RegisterDto): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<AxiosResponse<ClientDto>> {
    return axiosInstance.get('/client');
  }
}
