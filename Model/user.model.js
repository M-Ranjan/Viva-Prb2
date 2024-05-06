const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    Id : {type:Number},
    name: { type: String },
    Gender : {type:String}
},
);
module.exports = mongoose.model("users", userSchema);