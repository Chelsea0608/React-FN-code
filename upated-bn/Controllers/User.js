
const User = require('../Models/User');

exports.login = (req,res) =>{
        const email = req.body.email;
        const password = req.body.password;
       // const firstname = req.body.firstname;
        //const lastname = req.body.lastname;
        User.find({email:email,password:password})
        .then(result =>{
                if (result.length >= 1){ 
                res.status(200).json({message:"User loggedIn Successfully",isAuthenticated:true,user:result})}
                else{
                        res.status(200).json({message:"User not loggedIn Successfully",isAuthenticated:false,user:result})
                }
         
        }).catch(err=> {
                res.status(500).json({ message:err})
        })
       
}


exports.signup = (req,res,next) =>{
        const email = req.body.email;
        const password = req.body.password;
        const firstname = req.body.firstname;
        const lastname = req.body.lastname;
        const SignInUser = new User({email:email,password:password,firstname:firstname,lastname:lastname}
 );
 SignInUser.save().then(result =>{
                res.status(200).json({message:"User SignedUp Successfully",user:result})
        })
        .catch(err=> {
                res.status(500).json({ message:err})
        })
}
