import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateUserDto{
  @ApiProperty({ description: 'O usuário terá que fornecer o seu primeiro nome' })
  @IsNotEmpty()
  @IsString()
  firstName: string;


  @ApiProperty({ description: 'O usuário terá que fornecer o seu sobrenome' })
  @IsNotEmpty()
  @IsString()
  lastName: string;


  
  @ApiProperty({ description: 'O usuário terá que fornecer se ele está ativo ou não' })
  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;
}