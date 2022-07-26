import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import {
  MedicineData,
  MedicineDto, UploadedFile, SearchMedicine,
} from '../../types/Manager/MedicineDTO';

export default class MedicineService {
  static async createMedicine (data: MedicineData): Promise<AxiosResponse<MedicineDto>> {
    return axiosInstance.post('/manager/medicine', data);
  }

  static async createMedicinePic (id: number, selectedFile: string): Promise<AxiosResponse<UploadedFile>> {
    const formData = new FormData();
    formData.append('file', selectedFile);

    return axiosInstance.post(`/manager/medicine/${id}/set-pic`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static async searchMedicine (data: SearchMedicine): Promise<AxiosResponse<MedicineDto>> {
    return axiosInstance.get(`/manager/medicine/search?manufactureName=${data.manufactureName}
    &name=${data.name}
    &searchText=${data.searchText}`);
  }

  static async getMedicinePic (id: number): Promise<AxiosResponse> {
    return axiosInstance.get(`/manager/medicine/${id}/set-pic`, { responseType: 'arraybuffer' });
  }

  static async getMedicine (id: number): Promise<AxiosResponse<MedicineDto>> {
    return axiosInstance.get(`/manager/medicine/${id}`);
  }

  static async deleteMedicine (id: number): Promise<void> {
    return axiosInstance.delete(`/manager/medicine/${id}`);
  }

  static async updateMedicine (id: number, data: MedicineData): Promise<AxiosResponse<MedicineDto>> {
    return axiosInstance.put(`/manager/medicine/${id}`, data);
  }
}
