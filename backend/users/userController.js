
createUser = async(req,res)=>{

    try{
        const result =  await userService.createUser(req.body);
        res.json(result);
        
            
            
    }catch(err){
        res.json(err);
    }
}




getUsers= async(req, res)=>{
    const result = await userService.getUsers(req);
    console.log(result);
    res.send(result);
}
module.exports = { createUser,getUsers};
