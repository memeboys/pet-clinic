enum TypeNews {
  UPDATING = 'UPDATING',
  ADVERTISING_ACTIONS = 'ADVERTISING_ACTIONS',
  DISCOUNTS = 'DISCOUNTS',
  PROMOTION = 'PROMOTION',
}

export interface NewsRequest{
  type: TypeNews,
  content: string,
  isImportant: boolean,
  endTime: string,
  important: boolean

}
export interface NewsResponse extends NewsRequest{
  id: number,
}

export interface MedicineRequestDto{
  manufactureName: string,
  name: string,
  icon: string,
  description: string
}
export interface MedicineResponseDto extends MedicineRequestDto{
  id: number,
}

export interface UploadedFileDto{
  filename: string,
  url: string
}
