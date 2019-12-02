import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
 type User {
  _id: ID!
  name: String!,
  date: Date,
  content: String!
 }
scalar Date
type Query {
  getNote(_id: ID!): User
  allUsers: [User]
 }
input UserInput {
  name: String!
  content: String!
 }
type Mutation {
  createUser(input: UserInput) : User
 }
`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;