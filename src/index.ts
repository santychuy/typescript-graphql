import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

import { RegisterResolver } from './modules/user/Register';


(async () => {
    await createConnection(); //Hace conexion DB

    const schema = await buildSchema({ //Crea el schema, pasandole los resolver que tenemos creados
        resolvers: [RegisterResolver]
    });

    const apolloServer = new ApolloServer({schema}); //Instancia un objeto de un servidor de Apollo y pasamos el schema

    const app = Express(); //Monta la app

    apolloServer.applyMiddleware({app}); //Aplicamos el Middleware de Apollo a la app

    app.listen(3000, () => { //Arrancamos servidor
        console.log('Server on port 3000/graphql');
    });
})()