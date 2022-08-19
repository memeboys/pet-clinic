import { AxiosResponse } from 'axios';
import { axiosInstance } from '../index';
import { EctoParasites } from '../../types/Client/EctoParasites';

export default class EctoParasitesService {
  static async getEctoParasitesById (id: string): Promise<AxiosResponse<EctoParasites>> {
    return axiosInstance.get(`client/procedure/external/${id}`);
  }
}
