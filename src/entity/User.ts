import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    firstName: string;

    @Field()
    @Column()
    lastName: string;

    /* Para solo Graphql */
    @Field()
    name: string;

    /* Para ambos */
    @Field()
    @Column("text", { unique: true })
    email: string;

    /* Para solo DB */
    @Column()
    password: string;
}