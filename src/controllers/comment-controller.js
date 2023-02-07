
import CommentService from "../services/comment-service.js";
const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.create( req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        console.log(response);
        return res.status(201).json({
            success: true,
            message: 'Successfully Created a new comment',
            data: response,
            error:{}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went Wrong",
            data: {},
            err: error
        });
    }
}