import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './Dto/createuser.dto';
import { UpdateUserDto } from './Dto/updateuser.dto';
import{HttpException} from '@nestjs/common';
import{NotFoundException} from '@nestjs/common';
import{HttpStatus} from '@nestjs/common';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  
// Método para criar usuários a partir de dados fornecidos pelo usuário a partir de DTO e também typeorm(.create() e .save(), assim como do repositório User)
Createuser(createUserDto: CreateUserDto){
const newUser = this.usersRepository.create(createUserDto);
  return this.usersRepository.save(newUser);
}

  
// Método para encontrar todos os usuários utilizando do typeorm(.find())
FindAll(){
    return this.usersRepository.find();
  }

  
// Método para encontrar um usuário pelo ID utilizando do typeorm e verificando se existe esse usuário, caso exista irá retornar as suas informações entretanto se não existir irá retornar um erro 403 com uma mensagem 'Usuário não encontrado'
async FindOne(id: number) {
    const findOne = await this.usersRepository.findOneBy({ id });
  if(findOne){
    return findOne;
  } else {
    throw new NotFoundException('Usuário não encontrado!');
  }
  }

  
// Método para atualizar um usário pelo ID, utilizando de DTO(UpdateUserDto) e de parâmetros (updateuserdto), fornecido pelo usuário e utiliza-se do TypeOrm e do repositório User para acessar as mudanças e salvá-las.
async updateUserById(id: number, updateuserdto: UpdateUserDto){
 const userupdate = await this.usersRepository.findOneBy({id});
  if(userupdate){
userupdate.firstName = updateuserdto.firstName;
userupdate.lastName = updateuserdto.lastName;
userupdate.isActive = updateuserdto.isActive;
await this.usersRepository.save(userupdate);
  return userupdate;
  } else {
    throw new NotFoundException('Usuário não encontrado!');
  }
}

  
// Método para deletar um usuário pelo ID, utilizando do typeorm(.findOneBy()) e do repositório User, caso o usuário exista então ele será deletado e retornará uma mensagem 'Usuário deletado com sucesso', entretanto se não exisitir irá dar um erro 403 com a mensagem 'Usuário não encontrado'
  async delete(id: number) {
    const user = await this.usersRepository.findOneBy({ id });
  if(user){
    await this.usersRepository.delete(user);
    return 'Usuário deletado com sucesso!'
  } else {
    throw new NotFoundException('Usuário não encontrado!');
  }
  }
}