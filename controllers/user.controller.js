var dbUser = require('./../models/data')
var jwt = require('jsonwebtoken');
module.exports.register = async (req,res)=> {
    const user = {
        username:req.body.username,
        password:req.body.password,
        age:req.body.age
    }
   
       await dbUser.create(user,function(err,result){
            if (err) console.log(err);
            else {
                    res.json({
                            message:"Insert success"
                        })
            }
       })
  
}
module.exports.login = async (req,res)=> {
    const  username=req.body.username;
    const  password=req.body.password;
    
   
       await dbUser.find({username:username,password:password},function(err,result){
            if (err) console.log(err);
            else {
                if(result.length!==0){
                    const token = jwt.sign({ _id: result._id }, 'tokenkey');
                    res.header('auth-token',token).send(token)
                     
                }else{
                    res.json({
                        message:"Login fail"
                    })
                }
                   
            }
       })
  
}

module.exports.posts = async (req,res)=> {
    res.send("Success get header-token use jwt")
}