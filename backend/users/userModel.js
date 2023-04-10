const mongoose = require('mongoose');

const categoryItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
        default:0
    },
});
const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    createdDate:{
        type: String,
        required:true,
        default: new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})
    },
    items:{
        type:[categoryItemSchema],
        required: false
    }
});
const groupSchema = new mongoose.Schema({

});
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    categories:{
        type:[categorySchema],
        required: false
    },
    groups:{
        type:[groupSchema],
        required: false
    }
})