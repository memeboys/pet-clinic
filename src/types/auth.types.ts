export interface UserRegDTO {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  confirmPassword: string;
}

export interface LoginResponseDTO {
  jwtToken: string,
  role: string;
}

export interface CurrentClientResponseDTO{
  firstname: string,
  lastname: string,
  avatar: string | null,
  email: string,
  pets: string[]
}
