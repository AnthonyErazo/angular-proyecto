export interface LoginPayload {
    user: string | null;
    password: string | null;
}
export interface User{
    id:number;
    usuario: string ;
    password: string ;
    token:string;
}