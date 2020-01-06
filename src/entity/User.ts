import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

/* Entendimiento hasta ahorita: 
    Entity es el modelo de datos que tendremos para nuestro schema y modelo de DB

    Ver qué son los Decorators
*/

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