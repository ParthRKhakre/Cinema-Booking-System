const mongoose = require("mongoose")

function connectToDB(){

    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("server connected to DB")
    })
    .catch(err=>{
        console.log("error in connecting to DB")
        process.exit(1)
    })

}