import User from './models/user';
export const resolvers = {
    Query : {
        async getNote(root, {_id}){
            return await User.findById(_id);
        },
        async allUsers(){
            return await User.find();
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            return User.create(input);
        }
    }
};