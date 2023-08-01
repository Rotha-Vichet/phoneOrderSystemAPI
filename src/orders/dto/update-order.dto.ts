import { Province } from "src/phonestore/schemas/phone.schema";
import { Color } from "../schemas/order.schema";
import { IsArray, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";


export class UpdateOrderDto {

    @IsOptional()
    @IsEnum(Province)
    readonly province: Province

    @IsOptional()
    @IsString()
    readonly region: string

    @IsOptional()
    @IsString()
    readonly storeName: string

    @IsOptional()
    @IsDateString()
    readonly date: Date

    @IsOptional()
    @IsString()
    readonly pModel: string

    @IsOptional()
    @IsNumber()
    readonly amountM: number

    @IsOptional()
    @IsArray()
    readonly color: {
        value: Color
        amount: number
    }[]

    
}