enum PetType {
  CAT = 'CAT',
  DOG = 'DOG',
}

enum Role{
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  DOCTOR = 'DOCTOR',
  CLIENT = 'CLIENT',
  UNVERIFIED_CLIENT = 'UNVERIFIED_CLIENT',
}

export interface RegisterDto {
  email?: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
}

export interface AuthRequest{
  username: string,
  password: string
}
export interface AuthResponse {
  jwtToken: string,
  role: Role;
}

export interface ClientDto{
  firstname: string,
  lastname: string,
  avatar?: string | null,
  email?: string,
  pets: PetDto[]
}

export interface PetDto {
  id: number,
  name: string,
  avatar: string,
  birthDay: string,
  notificationCount: number,
  petType: PetType
}
