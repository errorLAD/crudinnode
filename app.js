require(express-async-error);

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose"); 
const studentRoute = requier('./routes/student');

app.use(express.json())
app.use(cors())

app.use("/api/v1", studentRoute);

const port = process.env.PORT || 3000;

const start = async () => {
    try{ 
        await mongoose.connect('mongodb://localhost:27017/student_db')
        app.listen(port, () => {
            console.log("server listeing on port" + port)
        }) 
    } catch {

    }
}