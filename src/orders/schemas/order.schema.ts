import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Province } from "../../phonestore/schemas/phone.schema";

// export enum Province{
//     KAMPONGCHAM= 'Kampong Cham',
//     KAMPONGTHOM = 'Kampong Thom',
//     KRATIE = 'Kratie',
//     STEUNGTRENG = 'Steung Treng',
//     KAMPONGCHHANG = 'Kampong Chhnang',
//     MONDULKIRI = 'Mondulkiri',
//     TBONGKHMUM = 'Tbong Khmum',
//     RATANAKIRI = 'Ratanakiri',
// }

export enum Color{
    RED= 'Red',
    BLUE= 'Blue',
    BLACK= 'Black',
    GOLD= 'Gold',
    ROSEGOLD= 'Rose Gold',
    SILVER= 'Silver',
}

@Schema({
    timestamps: true,
})
export class Order {

    @Prop()
    province: Province

    @Prop()
    region: string

    @Prop()
    storeName: string

    @Prop()
    date: Date

    @Prop()
    pModel: string

    @Prop()
    amountM: number

    @Prop()
    color: {
        value: Color
        amount: number
    }[]

}

export const OrderSchema = SchemaFactory.createForClass(Order)