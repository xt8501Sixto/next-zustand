export interface User {
    id: string,
    username: string,
    role: string;
    password?: string,
    token?: string
}