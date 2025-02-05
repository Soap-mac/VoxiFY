module.exports={
    ensureAuthentication:function(req,res,next){
        if(req.isAuthenticate){
            return next()
        }
        else{
            return res.json({success:'true',msg:"redirect to login"})
        }
    }
}