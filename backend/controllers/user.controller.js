import userModel from "../models/user.model.js"; 
import * as userService from "../services/user.services.js";
import {validationResult} from "express-validator"

export const createUserController = async (req, res) => {
 
const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    try {
        const user = await userService.createUser(req.body)

        const token = user.generateJWT();

        return res.status(201).json({user, token})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

export const loginController = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
 
    try {
          const {email, password} = req.body; 

         const user = await userModel.findOne({email})

         if(!user){
            return res.status(400).json({
                error: "Invalid email or password"
            })
         }

         const isMatch = await user.isValidPassword(password)

         if(!isMatch){
            return res.status(400).json({
                error: "Invalid email or password"
            })
         }
 
         const token = user.generateJWT(); 

            res.status(200).json({
                user, token
            })         
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
}

export const ProfileController = async (req, res) => {
    console.log(req.user);
    return res.status(200).json({user: req.user})
}