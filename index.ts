import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import schema from './src/graphql/schemasMap';

const PORT = 4000

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);

  /* ---------- morgan ---------- */
  /* morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process. */
  /* :method :url :status :response-time ms - :res[content-length] */
  app.use(morgan('dev'))

  /* ---------- CORS ---------- */
  /* CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. */
  app.use(cors());

  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
}

startApolloServer()