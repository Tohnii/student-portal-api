const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    registrationNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
});

const studentModel = mongoose.model('students', studentSchema);
module.exports = studentModel
