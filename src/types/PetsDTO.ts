export enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

export enum PetGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum PetSize {
  SMALL = 'SMALL',
}

export interface PetDTO {
  id: number;
  name: string;
  avatar: string;
  birthDay: string;
  notificationCount: number;
  petType: PetType;
  gender: PetGender;
  size: PetSize;
  weight: number;
  breed: string;
  color: string;
  description: string;
}
