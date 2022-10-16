# Extras

## morgan

morgan is a Node.js and Express middleware to log HTTP requests and errors, and simplifies the process.

Run following command to install morgan...

```console
npm install morgan @types/morgan
```

Now add given lines of code in `index.ts` inside `startApolloServer` function.

```javascript
import morgan from 'morgan';

app.use(morgan('dev'))
```

## CORS

CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

```console
npm install cors
```

Now add given lines of code in `index.ts` inside `startApolloServer` function.

```javascript
app.use(cors());
```