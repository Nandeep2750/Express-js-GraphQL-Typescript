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