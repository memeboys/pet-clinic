enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

export interface PetDTO {
  id?: number | null,
  name?: string | null,
  avatar?: string | null,
  birthDay?: string | null,
  notificationCount?: number | null,
  petType?: PetType | null
}
