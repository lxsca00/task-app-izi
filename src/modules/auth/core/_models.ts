export interface UserModel {
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

export interface AuthModel {
  token: string;
  user: UserModel;
}