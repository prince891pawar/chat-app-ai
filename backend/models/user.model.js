import mongoose from "mongoose"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
            required: true
     }
})

userSchema.statics.hashPassword = async function(password) {
     return await bcrypt.hash(password, 10)
}


userSchema.methods.isValidPassword = async function(password){
     return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateJWT = function() {
     return jwt.sign({ email: this.email }, process.env.JWT_SECRET);
}


const User = mongoose.model("user", userSchema)

export default User; 