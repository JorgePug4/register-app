export interface LoginRequest{
    email: string,
    password:string
}
export interface LoginResponse{
    idEmployee: number,
    completeName: string,
    image: string,
    idTypeUser:number
}