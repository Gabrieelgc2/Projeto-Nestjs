import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/**
 *coluna contendo id, firstName, lastName e isActive.*/
@Entity()
export class User {
  /**
   *Coluna gerada automaticamente contendo o ID do usuário.*/
  @PrimaryGeneratedColumn()
  id: number;
  /**
   *Coluna gerada automaticamente contendo o primeiro nome do usuário.*/
  @Column()
  firstName: string;
  /**
   *Coluna gerada contendo o sobrenome do usuário.*/
  @Column()
  lastName: string;
  /**
   *Coluna gerada contendo o status do usuário ativo ou não.*/
  @Column()
  isActive: boolean;
}