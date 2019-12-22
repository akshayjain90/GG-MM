import  mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CounterSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    countValue : {
        type: Number,
        required: true,
        default: 0
    },
    history: {
        countValue: Number,
        date: Date,
        userID: String
    },
    userIDs: {
        type: [String],
        required : true
    },
});

export default  mongoose.model('Counter', CounterSchema);