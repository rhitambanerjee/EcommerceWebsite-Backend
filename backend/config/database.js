const mongoose=require("mongoose");


const connectDatabase=()=>{
   mongoose.connect(process.env.DBURI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
      console.log("Connection to database successful");
   })
}

module.exports=connectDatabase