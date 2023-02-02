import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    onModel:{
        type: String,
        require: true,
        enum:['Tweet', 'Comment']
    },
    commentable:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        refPath: 'onModel'
    }
},{timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;