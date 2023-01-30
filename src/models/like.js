import mongoose, { mongo }  from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel:{
        type: String,
        require: true,
        enum:['Tweet', 'Comment']
    },
    likeable:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refpath: 'onModel'
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {timestamps: true});

const Like = mongoose.model('Like', likeSchema);

export default Like;