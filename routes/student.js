const express = require('express')
const router = express.Router();

const {  getAllContact, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact 
} = require("../controllers/student")


router.route("/student").get(getAllContact).post(createContact);
router.route("/student/:id").get(getContact).patch(updateContact).delete(deleteContact);

module.exports = router; 