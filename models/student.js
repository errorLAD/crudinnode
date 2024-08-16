const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');



const StudentSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Please provide name"],
        minlength: 3, 
        maxlength: 50
    }, 
    phoneNumber: {
        type: Number, 
        required: [true, 'plaese provide phone no '],
        minlength: 10, 
        maxlength: 11
    },
    email: {
        type: String, 
        required: [true, "Please provide email"], 
        minlength:3, 
        maxlength: 50, 
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
          ],
          unique: true,
    },

})

module.exports = mongoose.model("student", StudentSchema)

