export interface Course{
    id:number;
    name:String;
    description:String;
    starDate:Date;
    endDate:Date;
    alumsId:Array<number>;
}