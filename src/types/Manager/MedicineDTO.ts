import { WithId } from '../UtilityTypes';

export interface MedicineData{
  manufactureName: string,
  name: string,
  icon: string,
  description: string
}
export type MedicineDto = WithId<MedicineData>;

export interface SearchMedicine {
  manufactureName: string,
  name: string,
  searchText: string
}
export interface UploadedFile{
  filename: string,
  url: string
}
