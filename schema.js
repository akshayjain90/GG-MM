import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
 type History {
   countValue: Int
   date: Date
   userID: String
 }

 type Counter {
  _id: ID!
  title: String
  countValue: Int
  history : [History]
  userIDs : [String]
 }
 
 type User {
  _id: ID!,
  name: String!,
  email: String,
  counterIDs: [String]
 }
 scalar Date
 
 type Query {
  getUser(_id: ID!): User
  getUserByName(name: String): User
  allUsers: [User]
  getCountersForUser(_id: ID!): [Counter]
 }

 input UserInput {
  name: String!
  email: String
 }
 input CounterInput {
   title: String!
   countValue: Int
   userIDs: [String]!
 }
 
 type Mutation {
  createUser(input: UserInput) : User
  createCounter(input: CounterInput): Counter
  updateCounter(input: CounterInput): Counter
  deleteCounter(input: CounterInput): Counter
 }
`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;