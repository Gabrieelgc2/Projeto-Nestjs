import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //Importando o módulo TypeOrmModule e utilizando como a entidade User.
  providers: [UsersService],
//Importando o serviço UsersService como provider.
  controllers: [UsersController], 
//Importando o controller como UsersController.
})
export class UsersModule {}