import { AxiosResponse } from 'axios';
import { LoginResponseDTO, UserRegDTO, CurrentClientResponseDTO } from '../types/auth.types';
import { axiosInstance } from './index';

export default class AuthService {
  static async loginUser (username: string, password: string): Promise<AxiosResponse<LoginResponseDTO>> {
    return axiosInstance.post('/auth', { username, password });
  }

  static async createNewUser (data: UserRegDTO): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<CurrentClientResponseDTO> {
    return axiosInstance.post('/client');
  }
}
