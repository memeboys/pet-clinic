import { AxiosResponse } from 'axios';
import { PetContactRequestDto } from '../types/PetContactDTO';
import { axiosInstance } from './index';

export default class PetContactQrCode {
  static async createPetContact (id:number, data: PetContactRequestDto): Promise<AxiosResponse> {
    return axiosInstance.post(`/client/pet/${id}/qr`, data);
  }

  static async encodeQrCode (id:number): Promise<AxiosResponse> {
    return axiosInstance.get(`/client/pet/${id}/qr`, { responseType: 'arraybuffer' });
  }
}
