import type { AxiosResponse } from "axios";
import { apiClient } from "./client";
export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}
export interface UpdateUserData {
  message: string;
  user: User;
  old_password?: string;
  password?: string;
  profile_picture?: string;
  username?: string;
  email?: string;
}
export async function  login(data: LoginData): Promise<User> {
  return apiClient
    .post<User>('api/login/', data)
    .then((res: AxiosResponse<User>) => res.data)
    .catch((error) => {
      throw error;
    });
}

export function register(data: RegisterData): Promise<User> {
  return apiClient
    .post<User>('api/register/', data, {
      withCredentials: true,
    })
    .then((res: AxiosResponse<User>) => res.data);
}

export function logout(): Promise<void> {
  return apiClient
    .post<void>('api/logout/')
    .then((res: AxiosResponse<void>) => res.data);
}
