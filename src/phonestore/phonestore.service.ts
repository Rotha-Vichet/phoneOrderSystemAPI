import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { PhoneStore } from './schemas/phone.schema';
import * as mongoose from 'mongoose'
import { Query } from 'express-serve-static-core';
import { User } from '../auth/schemas/user.schema';

@Injectable()
export class PhonestoreService {
    constructor(
        @InjectModel(PhoneStore.name)
        private storeModel: mongoose.Model<PhoneStore>
    ) { }

    async findAll(query: Query): Promise<PhoneStore[]> {

        const resPerPage = 4
        const currentPage = Number(query.page) || 1
        const skip = resPerPage * (currentPage - 1)

        const keyword = query.keyword ? {
            province: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {}

        const stores = await this.storeModel
            .find({ ...keyword })
            .limit(resPerPage)
            .skip(skip);
        return stores;
    }

    async create(store: PhoneStore, user: User): Promise<PhoneStore> {

        const data = Object.assign(store, { user: user._id })

        const res = await this.storeModel.create(data)
        return res
    }

    async findByID(id: string): Promise<PhoneStore> {
        const isValidID = mongoose.isValidObjectId(id)
        if (!isValidID) {
            throw new BadRequestException('Please Enter correct ID!');
        }
        const store = await this.storeModel.findById(id)
        if (!store) {
            throw new NotFoundException('Store not found!');
        }
        return store
    }

    async updateByID(id: string, store: PhoneStore): Promise<PhoneStore> {
        return await this.storeModel.findByIdAndUpdate(id, store, {
            new: true,
            runValidators: true
        })

    }

    async deleteByID(id: string): Promise<PhoneStore> {
        return await this.storeModel.findByIdAndDelete(id)
    }

}
