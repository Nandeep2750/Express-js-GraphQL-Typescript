# Codegen

Codegen is THE tool you need if you are using graphql with Typescript. Codegen is going to scan your graphql files and generate a Typescript file with all the types you need for your resolvers!

I am not going to enumerate tools like Express or Typescript. They are famous enough!


## Setting up codegen

We are then going to set up codegen to start generating our typescript file based on our schemas.

For that, we’ll need to add a graphql file so that we have something to scan. For the purpose of the article. We’ll create a very simple file to login/register and get the token from a fake user.

Create some folders so that your hierarchy looks like this:

~~~~
- src
  - graphql
    - schemas
    - resolvers
~~~~

In the schemas folder, create a user.graphql file and this content in it:

```javascript
type Query {
  login(email: String!, password: String!): AuthenticateResponse!
}

type Mutation {
  register(email: String!, password: String!): AuthenticateResponse!
}

type AuthenticateResponse {
  token: String!
}
```

In the graphql file, we are simply adding one request of each time (mutation and query) and a type (AuthenticateResponse) so that we can fully take the benefit of codegen.

Now, in your terminal, run the following command to install the new packages we need:

```console
npm install -D @graphql-codegen/cli graphql
```

Then run the following command to setup codegen

```console
npx graphql-codegen init
```

## Steps for setup codegen in terminal

1. The first question is about the type of environment you’d like to run codegen. As we are targeting nodeJS here, use space to select the first option `API or server` and hit enter to go to the next step.

2. The second question is about where the schemas are. You can either use an URL (but you’ll have to have your server running to update the typescript file) or you can specify a file path to the graphql files. In our case, we’d like to target all the .graphql files located under `src/graphql/schemas`. Simply type the following value: `src/graphql/schemas/**/*.graphql`.

3. The third question is about plugins that you maybe need to generate the typescript file. In our case, the default options are more than fine. If you’d like to use codegen for mongodb, then you can check the third option. Otherwise, just hit enter

4. The fourth question is the path where our typescript file will be generated. You can put it wherever you’d like. In my case, I’ll choose `src/graphql/generated.ts`

5. For the fifth question, choose no (type `N` then hit enter)

6. The sixth question for name the config file, just keep it by default and hit enter or set `codegen.ts`.

7. Finally, for the last question, codegen is asking the script name to run the codegen command. In my case, I’m just going to type `codegen` and hit enter. It will set script in package.json should run the codegen.


```console
> npx graphql-codegen init

  Welcome to GraphQL Code Generator!
  Answer few questions and we will setup everything for you.

? What type of application are you building? Backend - API or server
? Where is your schema?: (path or url) src/graphql/schemas/**/*.graphql
? Pick plugins: TypeScript (required by other typescript plugins), TypeScript Resolvers (strongly typed resolve functions), TypeScript MongoDB (typed MongoDB objects)
? Where to write the output: src/generated/graphql.ts  
? Do you want to generate an introspection file? No
? How to name the config file? codegen.ts
? What script in package.json should run the codegen? codegen
Fetching latest versions of selected plugins...

  Config file generated at codegen.ts
    $ npm install

  To install the plugins.
    $ npm run codegen

  To run GraphQL Code Generator.
```

---

Once the setup is done, run following command as asked by codegen. 

```console
npm install
```

Then run following command to generate the typescript file.
```console
npm run codegen
```

Also Run following command if you also selected `TypeScript MongoDB` in `third question`.
```console
npm install mongodb
```