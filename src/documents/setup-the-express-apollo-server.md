# Setup the Express/Apollo server

We are almost there! Now that all our tools are now ready, we just have to link them all together.

In your **root folder**, create an `index.ts` file with the following content in it.

```javascript
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import http from 'http';
import schema from './src/graphql/schemasMap'

const PORT = 4000

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer()
```

> Don’t forget to install the new dependencies by running commands.
```console
npm install express apollo-server-express
npm install -D @types/express
```

This file is the entry point of your app. It’s going to first setup an express app, then create a new Apollo server by giving to it the schemaMap created earlier. We are then applying to the Apollo server express as middleware and we set the graphql path to be `/graphql`.

Finally, we start listening!

Now, if we want to test our application, we’ll have to be able to run it. For that, we are going to install nodemon and ts-node by running the command... 

```console
npm install -D nodemon ts-node
```

Then add a new script in your package.json with the name you’d like and make it run this command: `nodemon index.ts`.

If everything went fine, you have in the console a message saying that Apollo is running on port 4000.