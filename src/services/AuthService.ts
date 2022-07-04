import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';
import { PetDTO } from '../types/PetsDTO';

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

export interface ClientDto {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  pets: PetDTO[]

}

export default class AuthService {
  static async loginUser (username: string, password: string): Promise<AxiosResponse<LoginResponse>> {
    return axiosInstance.post('/auth', { username, password });
  }

  static async createNewUser (data: UserReg): Promise<void> {
    return axiosInstance.post('/registration', data);
  }

  static async getCurrentClient (): Promise<AxiosResponse<ClientDto>> {
    return axiosInstance.get('/client');
  }
}
