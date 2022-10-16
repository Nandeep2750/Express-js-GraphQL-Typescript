# Setup the resolver mapper

I like to be able to split my files for better maintenance. This is why I’d like to show you straight away how to set up a resolver mapper (which will merge multiple resolvers into one) instead of just using one only file for all resolvers.

First, in our folder `resolvers` create a new typescript file called `UserResolver.ts` this file will contain all resolvers related to the `user.graphql` file.

You can fill it with the following content:

```javascript
import { IResolvers } from '@graphql-tools/utils'
import { AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated'

export const UserResolvers: IResolvers = {
  Query: {
    async login(_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return {
        token: "toto"
      }
    }
  },
  Mutation: {
    async register(_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: "toto"
      }
    }
  }
}
```

> Don’t forget to run following command to have access to the graphql-tools package used in this file. Graphql-tools provides a lot of types and helpers to deal with graphql.

```console
npm install -D graphql-tools
```

This file contains two resolvers corresponding to the query and the mutation in the corresponding graphql file. Also, we are getting the types from the generated file and use them in our resolvers.

I’ve decided to make our resolvers simple but just return a simple object with a token.

> As you can see, codegen is using a pattern to generate the types. In your graphql file, if you define a type, the name is not going to change. However, for a query or mutation, it’s going to follow the pattern `<requestType><RequestName>Args`

---

Now that are resolver is ready, we’ll use it to merge it (alone for the moment) in a dedicated file. Create this file named resolversMap.ts in the folder graphql and put this content in it:

```javascript
import { IResolvers } from '@graphql-tools/utils'
import { merge } from 'lodash'
import { UserResolvers } from './resolvers/UserResolver'


const resolverMap: IResolvers = merge(UserResolvers)
export default resolverMap
```

> Don’t forget to run following commands to have access to the merge function and its types.

```console
npm install lodash
npm install -D @types/lodash
```

The purpose of this file is to get all your resolvers and merge them into one. This new resolver is going to be used by your graphql server later.