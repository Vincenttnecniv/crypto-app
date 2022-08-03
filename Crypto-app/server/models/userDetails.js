const mongoose = require ( 'mongoose' );

//defining schema for mongodb
let schema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    }
});

let OU = mongoose.model('user_detail', schema);

module.exports = {
  OU: OU
}