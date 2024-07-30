import { Controller, Delete, Get, Param, Post, Body, UsePipes, ValidationPipe, Put, ParseIntPipe} from '@nestjs/common';
import { UsersService} from './users.service';
import { UpdateUserDto } from './Dto/updateuser.dto';
import { CreateUserDto } from './Dto/createuser.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('users')
@Controller('users')
export class UsersController {
   constructor(private readonly userService: UsersService) {}
@Get() //Vai procurar todos os usuários existentes e disponibilizar todos os dados deles.
  getAll(){
    return this.userService.FindAll();
  }


@Get(':id') //Vai procurar um usuário pelo seu ID específico e disponibilizar os seus dados desejados.
  getonebyId(@Param('id', ParseIntPipe) id: number){
    return this.userService.FindOne(id);
  }

  
@Post('create') //Irá criar o usuário  utilizando do ParseIntPipe aceitando somente números inteiro passados rejeitando strings e será utilizado de validadores. Caso o usuário não exista irá dar um erro 403 com a mensagem 'Usuário não encontrado', entretanto se existir vai retornar uma resposta com 'Usuário deletado com sucesso!' e assim irá deletar o usuário.
@UsePipes(ValidationPipe)
createUser(@Body() createuser: CreateUserDto){
return this.userService.Createuser(createuser);
}

  
@Put(':id') //Irá criar um usuário utilizando de parâmetro o seu ID da rota @Put(':id'), utilizando de ParseIntPipe aceitando somente números inteiros como ID e requisitando no @Body(ValidationPipe), validadores pedindo informações do usuário juntamente com updateuserdto onde será armazenado os dados.
async updateUser(
@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateuserdto: UpdateUserDto){
  return await this.userService.updateUserById(id, updateuserdto);
}

  
@Delete(':id') //Irá deletar o usuário com base no ID fornecido, utilizando do ParseIntPipe aceitando somente números inteiros rejeitando strings, float. Caso o usuário não exista irá dar um erro 403 com a mensagem 'Usuário não encontrado', entretanto se existir vai retornar uma resposta com 'Usuário deletado com sucesso!' e assim irá deletar o usuário.
DeleteUser(@Param('id', ParseIntPipe) id:number){
    return this.userService.delete(id);
  }
}
