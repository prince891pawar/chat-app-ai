import jwt from "jsonwebtoken"; 
import redisClient from "../services/redis.service.js"

export const authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; 

    if(!token) {
        return res.status(401).json({error: "Unauthorized"})
    }

    const isBlacklist = await redisClient.get(`blacklist_${token}`)

    if(isBlacklist){
        return res.status(401).json({error: "Unauthorized"})
    }
                               
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({error: "Invalid token"})
    }
}