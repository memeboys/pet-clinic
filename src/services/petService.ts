import { axiosInstance } from './index';
import { PetDTO } from '../types/PetsTypes';

export default class PetService {
  static async getPet (id: string): Promise<PetDTO> {
    const res = await axiosInstance.get(`/client/pet/${id}`);
    const { data } = res;

    return data;
  }
}
