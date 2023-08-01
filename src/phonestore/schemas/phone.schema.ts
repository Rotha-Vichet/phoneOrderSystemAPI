import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "../../auth/schemas/user.schema";
import { type } from "os";
import mongoose from "mongoose";

export enum Province{
    KAMPONGCHAM= 'Kampong Cham',
    KAMPONGTHOM = 'Kampong Thom',
    KRATIE = 'Kratie',
    STEUNGTRENG = 'Steung Treng',
    KAMPONGCHHANG = 'Kampong Chhnang',
    MONDULKIRI = 'Mondulkiri',
    TBONGKHMUM = 'Tbong Khmum',
    RATANAKIRI = 'Ratanakiri',
}

@Schema({
    timestamps: true
})

export class PhoneStore{
    @Prop()
    province: Province;

    @Prop()
    region: string;

    @Prop()
    storeName: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;


}

export const PhoneSchema = SchemaFactory.createForClass(PhoneStore)