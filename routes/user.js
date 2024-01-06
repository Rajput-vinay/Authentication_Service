const express = require("express")
const router = express.Router();

// import controller
const {login , signup} = require("../Controllers/Auth");
const{auth,isStudent,isAdmin} = require("../middleware/auth")

//  define API routes

router.post("/login",login);
router.post("/signup", signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome to the protected route for testing"
    })
})

router.get("/student",auth,isStudent, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to the protected route for student"
    })
});

router.get("/admin",auth,isAdmin, (req,res) =>{
    res.json({
        success:true,
        message:"Welcome to the protected route for Admin",
    })
})

module.exports = router;