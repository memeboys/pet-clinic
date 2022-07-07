import { PetDTO } from './PetsDTO';

export interface ClientDto{
  firstname: string,
  lastname: string,
  avatar?: string | null,
  email?: string,
  pets: PetDTO[]
}
