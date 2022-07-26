export interface MedicineData{
  manufactureName: string,
  name: string,
  icon: string,
  description: string
}
export type MedicineDto<T extends MedicineData> = T & { id: number };

export interface SearchMedicine {
  manufactureName: string,
  name: string,
  searchText: string
}
export interface UploadedFile{
  filename: string,
  url: string
}
