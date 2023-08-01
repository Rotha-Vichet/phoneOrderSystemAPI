import { Color } from "src/orders/schemas/order.schema";
import { Province } from "src/phonestore/schemas/phone.schema";

export interface Order{
    province: Province
    region: string
    storeName: string
    date: Date
    pModel: string
    amount: number
    color: {
        value: Color
        amount: number
    }
}

