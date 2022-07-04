enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

export interface PetDTO {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  notificationCount: number,
  petType: PetType
}
