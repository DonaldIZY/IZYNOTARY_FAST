import { Module } from '@nestjs/common';
import { IdentifierService } from './identifier.service';
import { IdentifierController } from './identifier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Identifier } from './entities/identifier.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Identifier])],
  controllers: [IdentifierController],
  providers: [IdentifierService],
})
export class IdentifierModule {}
