import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService){}

    @Get()
    async getAllOrders(@Query() query: ExpressQuery): Promise<Order[]> {
        return this.orderService.findAll(query);
    }

    @Post()
    async createOrder(
        @Body()
        book: CreateOrderDto,
    ): Promise<Order>{
        return this.orderService.create(book)
    }

    @Get(':id')
    async getOrder(
        @Param('id')
        id: string
    ): Promise<Order> {
        return this.orderService.findById(id);
    }

    @Put(':id')
    async updateOrder(
        @Param('id')
        id:string,
        @Body()
        book: UpdateOrderDto,
    ): Promise<Order>{
        return this.orderService.updateById(id, book)
    }

    @Delete(':id')
    async deleteOrder(
        @Param('id')
        id: string
    ): Promise<Order> {
        return this.orderService.deleteById(id);
    }
}
