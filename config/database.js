const mongoose = require("mongoose")

require("dotenv").config();

const dbconnect = () =>{
mongoose.connect(process.env.DATABASE_URL, {
 
})

.then (() => console.log("DB Conncection successful"))
.catch((e) =>{
    console.error(error.message);
    process.exit(1);
});
}

module.exports = dbconnect;