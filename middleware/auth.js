const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = (req,res,next) =>{
    try{
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","");
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Nhi mila token",
            })

        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decode;
        }catch(error){
            return res.status(401).json({
            success:false,
            message:"token is invalid"
            })
        }
        next();
    }
     
    catch(error){
        return res.status(401).json({
            success: false,
            message:"Something is wernt wrong while verfying the token",
        })
    }
    
}


exports.isStudent = (req, res, next) =>{
    try{
        if(req.user.role !== "Student"){
            return res.status(401).json({
                success:false,
                message:"this is a protected route for student"
            })
        }
        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"user role cannot not be verfied "
        })
    }
}


exports.isAdmin = (req, res, next) =>{
    try{
 if(req.user.role !== "Admin"){
    return res.status(401).json({
        success:false,
        message:"this is protected route of Admin"
    })
 }
 next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"user role cannot not be verfied "
        })
    
    }
}