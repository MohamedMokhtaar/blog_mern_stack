import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
const {Schema} = mongoose;

const userSchema = new Schema({
    
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email address"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
        validate: {
        
                validator: (value) => 
                    validator.isStrongPassword(value, { 
                        minLength: 6,
                         minLowercase: 1,
                           minNumbers: 1,
                            minSymbols: 1
                     }),
               message: "Please provide a strong password"
            },
        },
    },
 {timestamps: true}

);

userSchema.pre("save", async function(){

    if(!this.isModified("password")){
       return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    
    
});

userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

const User = mongoose.model("User", userSchema);

export default User;