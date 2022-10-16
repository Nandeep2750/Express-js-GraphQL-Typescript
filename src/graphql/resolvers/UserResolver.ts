import { IResolvers } from '@graphql-tools/utils'
import { AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated'

export const UserResolvers: IResolvers = {
  Query: {
    async login(_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
      }
    }
  },
  Mutation: {
    async register(_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
      }
    }
  }
}