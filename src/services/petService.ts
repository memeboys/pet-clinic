import { AxiosResponse } from 'axios';
import { axiosInstance } from './index';
import { PetDTO } from '../types/PetsTypes';

export default class PetService {
  static async getPet (id: string): Promise<AxiosResponse<PetDTO>> {
    return axiosInstance.get(`/client/pet/${id}`);
  }
}
