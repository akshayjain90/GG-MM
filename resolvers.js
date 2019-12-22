import User from './models/user';
import Counter from './models/counter';

export const resolvers = {
    Query: {
        async getUser(root, {_id}) {
            return await User.findById(_id);
        },
        async getUserByName(root, {name}) {
            return await User.findOne({name: name});
        },
        async allUsers() {
            return await User.find();
        },
        async getCountersForUser(root, {_id}) {
            let user = await User.findById(_id);
            return await Counter.find({
                '_id': {
                    $in: user.counterIDs
                }, function (err, data) {
                    if (err) {
                        return done(err);
                    }
                    done(null, data);
                }
            });
        }
    },
    Mutation: {
        async createUser(root, {input}) {
            return User.create(input, );
        },
        async createCounter(root, {input}) {
            let counter = new Counter(input);
            await counter.save();
            await User.updateOne(
                { '_id': {
                        $in: [
                           counter.userIDs
                        ]
                    }},
                { $push :{counterIDs: counter._id}});
            return counter
        },
        async updateCounter(root, {input}) {
            return Counter.findOneAndUpdate(input)
        },
        async deleteCounter(root, {input}) {
            return Counter.findByIdAndRemove(input);
        }
    }
};