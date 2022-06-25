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

export default class AuthService {
  static async loginUser (username: string, password: string): Promise<AxiosResponse<LoginResponse>> {
    return axiosInstance.post('/auth', { username, password });
  }

  static async createNewUser (data: UserReg): Promise<void> {
    return axiosInstance.post('/registration', data);
  }
}
