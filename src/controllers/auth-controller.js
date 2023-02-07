import UserService from "../services/user-service.js";
import User from "../models/user.js";

const userService = new UserService();

export const signup = async (req, res) => {
    try{
        const response = await userService.signup({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
           
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully Created a new user',
            data: response,
            err: {}
        });
    }catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success:  false,
            err: error
        });
    }

}

export const login = async(req, res)=> {
    try{
        const token = await userService.signin(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully Loged in',
            data: token,
            err:{}
        })
    }catch(error){
        return res.status(500).json({
            message: "something went wrong",
            data: {},
            success:  false,
            err: error
        });
    }

}