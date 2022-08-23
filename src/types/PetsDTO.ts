enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

enum PetSize {
  SMALL = 'SMALL',
  MIDDLE = 'MIDDLE',
  LARGE = 'LARGE',
}

export interface PetDTO {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  notificationCount: number,
  petType: PetType,
  gender: string,
  breed: string,
  color: string,
  weight: number,
  size: PetSize
}
