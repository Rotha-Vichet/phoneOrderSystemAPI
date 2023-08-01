import { IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator"
import { Province } from "../schemas/phone.schema"
import { User } from "../../auth/schemas/user.schema"


export class CreateStoreDto{

    @IsNotEmpty()
    @IsEnum(Province, { message: 'Each firt Leter begin with uppercass! and be sure to write correctly!'})
    readonly province: Province

    @IsNotEmpty()
    @IsString()
    readonly region: string

    @IsNotEmpty()
    @IsString()
    readonly storeName: string

    @IsEmpty({message: 'You cannot pass user ID'})
    readonly user: User
}