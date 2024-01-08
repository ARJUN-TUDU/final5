const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();

app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(cors(
    {
        origin: ["https://final5-frontend.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));


try{

    mongoose.connect
    ('mongodb+srv://arjuntudu:3SgTm1Z6n2Hs8tAQ@cluster0.ssu2p.mongodb.net/?retryWrites=true&w=majority');

}catch(e){

    if(e){
        console.log("mongoose connection error");
    }else{
        console.log("connection done")
    }

}





const User = mongoose.model('collection_1',{

    name : String,
    age : String

})




const imageSchema = mongoose.Schema({
    image : String
})




             
try{
    var new_user = new User({
        name : 'arjun'+i,
        age : 5000

    })

    new_user.save();


}catch(e){
    
    if(e){
        console.log("data entry error");
    }else{
        console.log("data query error");
    }

  

}

    
    




app.get("/", async (req,res)=>{
    
    try{

        const data = await User.find();
        console.log(data);
        res.json(data);

    }catch(e){
        
        if(err){

            console.log("send error");

        }
    }

})

app.post("/insert",async (req,res)=>{
    
    try{

        const new_user = new User(req.body);
        await new_user.save();

    }catch(e){

        console.log("insert error");

    }

})



;
app.listen(PORT,(err)=>{
    
    if(err){

        console.log(err);

    }else{

        console.log("app STARTD");
        
    }

})
