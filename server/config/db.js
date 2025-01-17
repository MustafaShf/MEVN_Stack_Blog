const mongoose=require('mongoose')

async function connectToDB()
{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log(`connected to DB ${mongoose.connection.host}`
        )
    })
}

module.exports=connectToDB;