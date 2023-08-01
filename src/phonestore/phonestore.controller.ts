import { Body, Controller, Get, Post, Param, Put, Delete, Query, UseGuards, Req } from '@nestjs/common';
import { PhonestoreService } from './phonestore.service';
import { PhoneStore } from './schemas/phone.schema';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Query as ExpressQuuery} from 'express-serve-static-core';
import { AuthGuard } from '@nestjs/passport';

@Controller('phonestores')
export class PhonestoreController {
    constructor(private storeService: PhonestoreService) { }

    @Get()
    async getAllStore(@Query() query: ExpressQuuery): Promise<PhoneStore[]> {
        return this.storeService.findAll(query)
    }

    @Post()
    @UseGuards(AuthGuard())
    async createStore(
        @Body()
        store: CreateStoreDto,
        @Req() req,
    ): Promise<PhoneStore> {
        return this.storeService.create(store, req.user)
    }

    @Get(':id')
    async getStore(
        @Param('id')
        id: string
    ): Promise<PhoneStore> {
        return this.storeService.findByID(id)
    }

    @Put(':id')
    async updateStore(
        @Body()
        store: UpdateStoreDto,
        @Param('id')
        id: string,
    ): Promise<PhoneStore> {
        return this.storeService.updateByID(id, store)
    }

    @Delete(':id')
    async deleteStore(
        @Param('id')
        id: string
    ): Promise<PhoneStore> {
        return this.storeService.deleteByID(id)
    }


}
