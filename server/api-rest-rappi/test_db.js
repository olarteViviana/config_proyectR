const mongoose = require('mongoose');

(async ()=>{
  try{
      mongoose.set('strictQuery', true)
      const db = await mongoose.connect('mongodb://127.0.0.1:27017/rappi')
      console.log("DB connected", db.connection.name )
      process.exit();
  }
  catch (error){
      console.error(error)
  }
  
})()