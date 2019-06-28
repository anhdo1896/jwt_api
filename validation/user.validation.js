var jwt = require('jsonwebtoken');
module.exports.register=(req,res,next)=>{
    const username=req.body.username
    const password=req.body.password
    const age=req.body.age
    var err =[]
    if(!username){
        res.json({
            message:'username must be required'
        })
        err.push('username must be required')
    }else if(!password){
        res.json({
            message:'password must be required'
        })
        err.push('password must be required')
    }else if(!age){
        res.json({
            message:'age must be required'
        })
        err.push('age must be required')
    }
    
    if(err.length!==0){
        next('route')
    }else{
        next()
    }
}
module.exports.login=(req,res,next)=>{
    const username=req.body.username
    const password=req.body.password
    const age=req.body.age
    var err =[]
    if(!username){
        res.json({
            message:'username must be required'
        })
        err.push('username must be required')
    }
     else if(!password){
        res.json({
            message:'password must be required'
        })
        err.push('password must be required')
    }
    
    if(err.length!==0){
        next('route')
    }else{
        next()
    }
}
module.exports.posts = (req,res,next)=>{
   const token =req.header('auth-token');
   if(!token){
       return res.status(401).send('Access Denied')
   } 
   try {
       const verified = jwt.verify(token,'tokenkey')
       req.user = verified
       next();
   } catch (error) {
    return res.status(401).send('Invalid token')
   }
}