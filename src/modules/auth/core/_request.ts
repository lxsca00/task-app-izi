/* eslint-disable no-lone-blocks */
import axios from "axios";
import { AuthModel, UserModel } from "./_models";


const API_URL = "http://localhost:3000/api/v1/auth";

export const VALIDATE_URL = `${API_URL}/validate`;
export const LOGIN_URL = `${API_URL}/login`;
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`;

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  });
}

// Server should return object => { result: boolean } (Is Email in DB)
// eslint-disable-next-line no-lone-blocks
export function requestPassword(email: string) {
  return axios.post<{ result: boolean }>(REQUEST_PASSWORD_URL, {
    email,
  });
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(VALIDATE_URL, {
    api_token: token
  });
}
