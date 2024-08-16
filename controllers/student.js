
const Student = require("../models/student");

const getAllContact = async (req,res) => {
    const student  = await Student.find({});
    res.status(2000).json({ student, count: student.length}) 
};

const createContact = async (req,res) => {
    const student = await Student.create(req.body); 
    res.status(201).json({ student});
}

const getContact = async(req,res) => { 
    const { id : studentId } = req.params
    
    const student = await Student.fondOne({
        _id: studentID
    })
    if(!student) {
        res.status(404).json({ msg:`student with ${studentID}`})
    }
    return res.status(200).json({ student})
}

const updateContact  = async (req,res) => {
    const {
        body: { name, email, phoneNumber}, 
        params: { id: studentID}, 
    } =  req
    if (name == '' || email === '' || phoneNumber === '' || hobbies === '') {
        return res.status(400).json({ msg: ' Error Please add values to all fields"request error. plz fill'})
    }
    const student = await Student.findByIdAndUpdate( 

        { _id: studentID}, 
        req.body, 
        { new : true , runValidators: true}
    );
    if(!student) {
        res.status(404).json ({ msg: `student with ${studentId}`});

    }
    return res.status(200).json({ student})
}

const deleteContact = async(req,res) => {
    const {
        params: {id: studentID}
     } = req; 
    
     const student = await Student.findByIdAndDelete({ _id:studentID})
     if(!student) {
        return res.status(404).json({ msg: `No student with is ${id} foound`})
     }
     res.status(200).send();
}

module.exports = {
    getAllContact, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact
}
