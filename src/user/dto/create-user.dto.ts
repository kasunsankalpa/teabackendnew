import { IsNotEmpty, IsNumber, isNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    firstName:string;

    @IsNotEmpty()
    @IsString()
    lastName:string;

    @IsString()
    @IsNotEmpty()
    userName:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsString()
    @IsOptional()
    otherString:string;

    @IsOptional()
    @IsNumber()
    otherInt:number;

    
}
