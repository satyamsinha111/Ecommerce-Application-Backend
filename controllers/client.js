 const Client = require("../models/client")

 exports.sendMessage = (req,res)=>{
    const client = new Client(req.body);
    client.save((err,client)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        console.log("message sent")
        return res.json(client)
    })

 }