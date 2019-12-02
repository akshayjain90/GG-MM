import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default  mongoose.model('user', UserSchema);