import { Province } from "src/phonestore/schemas/phone.schema";
import { Color } from "../schemas/order.schema";
import { ArrayNotEmpty, IsArray, IsDate, IsDateString, IsEnum, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString } from "class-validator";


export class CreateOrderDto {

    @IsNotEmpty()
    @IsEnum(Province, {message: 'Please Enter the correct Name for Province!'})
    readonly province: Province

    @IsNotEmpty()
    @IsString()
    readonly region: string

    @IsNotEmpty()
    @IsString()
    readonly storeName: string

    @IsNotEmpty()
    @IsDateString()
    readonly date: Date

    @IsNotEmpty()
    @IsString()
    readonly pModel: string

    @IsNotEmpty()
    @IsNumber()
    readonly amountM: number

    @IsArray()
    @ArrayNotEmpty()
    // @IsNumber()
    readonly color: {

        readonly value: Color

        readonly amount: number
    }[]

    
}