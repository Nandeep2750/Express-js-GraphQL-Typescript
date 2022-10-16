# Setup the schemas mapper

Now, we are going to do the same with our schemas. Next to your resolversMap.ts, create a new file called `schemasMap.ts` and put the following content in it.

```javascript
import 'graphql-import-node'
import * as emptyTypeDefs from './schemas/empty.graphql'
import * as userTypeDefs from './schemas/user.graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import resolvers from './resolversMap'
import { GraphQLSchema } from 'graphql'
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers
})
export default schema
```

> Don’t forget to run following command. This package allows you to import in your application .graphql files. Without it, you are more likely going to have an error when importing them.

```console
npm install graphql-import-node
```

Do not worry about the empty.graphql import just yet, I’m going to show it to you after finishing with this file.

The function `makeExecutableSchema` is the key function to manage the whole merging. It takes the schemas (or typeDefs) and the resolvers as parameters and generate a new, standard Graphql schema.

> Be careful here with the order in the typeDefs array. the **emptyTypeDefs MUST be the first in the array** or this is not going to work.

Now, for the `empty.graphql` file. Create it next to the user.graphl one and put this content in it.

The goal of this file is defining the types Query and Mutation so that all the other schema files can extend from them. This is why the emptyTypeDefs must be first in the array as mentioned earlier.

> The `_empty` values are here as placeholders as graphql do not authorise empty objects.

We also have a **small change** to do in our `user.graphql` file. As we are merging now, you have to add the keyword `extend` before `type Query` and `type Mutation` and you’ll have to do it in any file using this type in the future. Only empty.graphql is not using extend as it’s defining the original types.