import { IsEmpty, IsEnum, IsOptional, IsString } from "class-validator"
import { Province } from "../schemas/phone.schema"
import { User } from "../../auth/schemas/user.schema"



export class UpdateStoreDto{

    @IsOptional()
    @IsEnum(Province, { message: 'Each firt Leter begin with uppercass! and be sure to write correctly!'})
    readonly province: Province
    
    @IsOptional()
    @IsString()
    readonly region: string
    
    @IsOptional()
    @IsString()
    readonly storeName: string

    @IsEmpty({message: 'You cannot pass user ID'})
    readonly user: User
}