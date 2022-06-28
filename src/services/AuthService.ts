import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';

interface UserReg {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
}

interface LoginResponse {
  jwtToken: string,
  role: string;
}

interface CurrentClientResponse{
  firstname: string,
  lastname: string,
  avatar: string | null,
  email: string,
  pets: string[]
}

export default class AuthService {
  static async loginUser (email: string, password: string): Promise<AxiosResponse<LoginResponse>> {
    return axiosInstance.post('/auth', { email, password });
  }

  static async createNewUser (data: UserReg): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<CurrentClientResponse> {
    return axiosInstance.post('/client');
  }
}
