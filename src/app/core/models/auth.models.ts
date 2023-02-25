export interface APIResponse {
  isSuccess: boolean;
  result: any;
}

export class User {
    id: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    email: string;
}
