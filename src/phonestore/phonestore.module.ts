import { Module } from '@nestjs/common';
import { PhonestoreController } from './phonestore.controller';
import { PhonestoreService } from './phonestore.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneSchema } from './schemas/phone.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: 'PhoneStore', schema: PhoneSchema}])
  ],
  controllers: [PhonestoreController],
  providers: [PhonestoreService]
})
export class PhonestoreModule {}
