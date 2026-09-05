const express = require("express");

const studentRoute = express.Router();
const { createStudent, getSingleStudent, updateStudent, deleteStudent } 
= require("../controller/studentController");

studentRoute.post('/new-student', createStudent);
studentRoute.get('/get-one-student/:userId', getSingleStudent);
studentRoute.put('/update-student/:userId', updateStudent);
studentRoute.delete('/delete-student/:userId', deleteStudent);

module.exports = studentRoute;