import { Resolver, Query, Mutation, Arg } from "type-graphql";
import bcrypt from 'bcryptjs';
import { User } from "../../entity/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
    @Query(() => String, { nullable: true, description: 'Regresa un saludo 🤝' })
    async hello() {
        return "Hola Mundo!";
    }

    @Mutation(() => User, { description: 'Crea un usuario nuevo' }) //Qué regresa
    async register(
        @Arg('data') { firstName, lastName, email, password }: RegisterInput
    ) : Promise<User> { //Qué espera regresar
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            firstName,
            lastName,
            email, 
            password: hashedPassword
        }).save()

        return user;
    }
}