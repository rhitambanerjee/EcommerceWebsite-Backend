const app=require('./app')
const dotenv=require('dotenv')
const connectDatabase=require('./config/database')

//handling uncaught exception
process.on("uncaughtException",(err)=>{
   console.log(`Error is ${err}`);
   console.log(`shutting the server due to uncaught exception`);
   process.exit(1);
});


//config
dotenv.config({path:"backend/config/config.env"})
//connecting to database
connectDatabase()

const server=app.listen(process.env.PORT || 3000 ,()=>{
   console.log(`Listening on port ${process.env.PORT || 4000}`)
})


//unhandled promise rejection
process.on("unhandledRejection",err=>{
   console.log(`Error is ${err.message}`)
   console.log(`shutting down the server due to unhandled promis rejection`)
   server.close(()=>{
      process.exit(1);
   });
});