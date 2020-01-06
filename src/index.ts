import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

import { RegisterResolver } from './modules/user/Register';

//Por lo pronto aqui los resolvers para Graphql


(async () => {
    await createConnection();

    const schema = await buildSchema({
        resolvers: [RegisterResolver]
    });

    const apolloServer = new ApolloServer({schema});

    const app = Express();

    apolloServer.applyMiddleware({app});

    app.listen(3000, () => {
        console.log('Server on port 3000/graphql');
    });
})()