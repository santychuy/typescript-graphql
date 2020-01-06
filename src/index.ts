import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import { createConnection } from 'typeorm';

@Resolver()
class HelloResolver {
    @Query(() => String, { nullable: true, description: 'Regresa un saludo 🤝' })
    async hello() {
        return "Hola Mundo!";
    }
}

(async () => {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [HelloResolver]
    });

    const apolloServer = new ApolloServer({schema});

    const app = Express();

    apolloServer.applyMiddleware({app});

    app.listen(3000, () => {
        console.log('Server on port 3000/graphql');
    });
})()