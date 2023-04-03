const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const elve = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true},
    email:{type: String,required:true,unique:true}
})

const elvee = mongoose.model("user",elve);
module.exports = elvee