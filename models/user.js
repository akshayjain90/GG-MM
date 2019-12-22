import  mongoose from 'mongoose';
import Counter from './counter';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: false
    },
    counterIDs : {type: [String]}
});

export default  mongoose.model('User', UserSchema);