import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose'
import { Order } from './schemas/order.schema';
import { Query } from 'express-serve-static-core';


@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name)
        private orderModel: mongoose.Model<Order>
    ){}

    async findAll(query: Query): Promise<Order[]> {

        // const resPerPage = 10
        // const currentPage = Number(query.page) || 1
        // const skip = resPerPage * (currentPage - 1)

        // const keyword = query.keyword ? {
        //     province: {
        //         $regex: query.keyword,
        //         $options: 'i'
        //     }
        // } : {}

        // const orders = await this.orderModel.find({...keyword}).limit(resPerPage).skip(skip)
        // return orders

        const orders = await this.orderModel.find()
        return orders
    }
    
    async create(order: Order): Promise<Order>{
        const res = await this.orderModel.create(order)
        return res
    }

    async findById(id: string): Promise<Order>{

        const IsValidId = mongoose.isValidObjectId(id)

        if(!IsValidId){
            throw new BadRequestException('Please Enter Correct ID')
        }

        const order = await this.orderModel.findById(id)

        if(!order){
            throw new NotFoundException('Order Not Found!')
        }

        return order
    }

    async updateById(id: string, order: Order): Promise<Order>{
        return await this.orderModel.findByIdAndUpdate(id, order, {
            new: true,
            runValidator: true
        })
    }

    async deleteById(id: string): Promise<Order>{
        return await this.orderModel.findByIdAndDelete(id)
    }
}
