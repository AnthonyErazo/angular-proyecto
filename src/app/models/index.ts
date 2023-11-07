export interface User{
    user:string;
    password:string;
    token:string;
}
export interface Alums{
    id:number;
    name:String;
    lastName:String;
    email:String;
    condition:String;
    semester:number;
    age:number;
    cursesId:Array<number>;
}
export interface Course{
    id:number;
    name:String;
    description:String;
    starDate:Date;
    endDate:Date;
    alumsId:Array<number>;
}