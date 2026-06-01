import User from "../models/user.js";

export const register = async (req, res) =>{
    try{
        const {email, username, password} = req.body;
   

     const isUserExists = await User.findOne(
        { $or: [
            {email: email.toLowerCase()},
            {username: username.toLowerCase()}
        ]    
        });

       if(isUserExists){
         return res.status(400).json({
             success: false,
             message: "Email or username already exists"
         })
        }

        const useInfo = new User({
            email: email.toLowerCase(),
            username: username.toLowerCase(),
            password: password
        })

        await useInfo.save();
        

        res.status(201).json({
            success: true,
            message: "User created successfully",   
            useInfo
        })
    } catch(error){
        // errror message
        console.log("Error for registering user",error);
          return res.status(500).json({
            success: false,
            message: error.message
        });
        

    }
}


export const loginUser = async (req, res) =>{
    try{
        const {email, password} = req.body;

        // check if user exists

        const isUserExists = await User.findOne({
            email: email.toLowerCase(),
        }).select("+password");
        if(!isUserExists){
            return res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }
        const isPasswordCorrect = await isUserExists.comparePassword(password);
        if(!isPasswordCorrect){
            return res.status(400).json({
                success: false,
                message: "Email or Password is incorrect"
            })
        }

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            isUserExists
        })
    } catch(e){
        console.log("Error Message:",e)
        return res.send(400).json(e.message)
    }
}