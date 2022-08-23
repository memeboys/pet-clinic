import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import { PetDTO } from '../../types/PetsDTO';

export default class PetService {
  static async getPet (id: string): Promise<AxiosResponse<PetDTO>> {
    return axiosInstance.get(`/client/pet/${id}`);
  }

  static async deletePet (id: PetDTO['id']): Promise<AxiosResponse<void>> {
    return axiosInstance.delete(`/api/client/pet/${id}`);
  }

  static async editPet (id: string, data: PetDTO): Promise<AxiosResponse<PetDTO>> {
    return axiosInstance.put(`/client/pet/${id}`, data)
  }
}
