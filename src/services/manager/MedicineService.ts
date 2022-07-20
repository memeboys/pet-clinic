import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import {
  MedicineRequestDto,
  MedicineResponseDto, UploadedFileDto,
} from '../../types/ManagerDTO';

export default class MedicineService {
  static async createMedicine (data: MedicineResponseDto): Promise<AxiosResponse<MedicineResponseDto>> {
    return axiosInstance.post('/manager/medicine', data);
  }

  static async createMedicinePic (id: number, selectedFile: string): Promise<AxiosResponse<UploadedFileDto>> {
    const formData = new FormData();
    formData.append('file', selectedFile);

    return axiosInstance.post(`/manager/medicine/${id}/set-pic`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async searchMedicine (searchText: string): Promise<AxiosResponse<MedicineResponseDto>> {
    return axiosInstance.get(`/manager/medicine/search${searchText}`);
  }

  static async getMedicinePic (id: number): Promise<AxiosResponse> {
    return axiosInstance.get(`/manager/medicine/${id}/set-pic`, { responseType: 'arraybuffer' });
  }

  static async getMedicine (id: number): Promise<AxiosResponse<MedicineResponseDto>> {
    return axiosInstance.get(`/manager/medicine/${id}`);
  }

  static async deleteMedicine (id: number): Promise<void> {
    return axiosInstance.delete(`/manager/medicine/${id}`);
  }

  static async updateMedicine (id: number, data: MedicineRequestDto): Promise<AxiosResponse<MedicineResponseDto>> {
    return axiosInstance.put(`/manager/medicine/${id}`, data);
  }
}
