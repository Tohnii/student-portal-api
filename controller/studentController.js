const studentModel = require("../model/studentModel.js")

/**
 * CRUD
 * CREATE STUDENT (POST)
 * READ STUDENT (GET) 
 * UPDATE STUDENT
 * DELETE STUDENT
 */

// CREATE STUDENT
 const createStudent = async (req , res)=>{
    try{
        const { name, registrationNumber, email } = req.body
        const student = await studentModel.create({
            name, registrationNumber, email
        }) 
         return res.status(201).json({
            message: "Student created successfully",
            data : student
        })
    }catch(error){
       res.status(500).json({ message: error.message})
    }
}


//SINGLE GET (params)
 const getSingleStudent = async (req, res) => {
    try{
        const { id } = req.params
        const getSingle = await studentModel.findById(id)
        if(!getSingle){
            return res.status(404).json({
                message: "Student not found"
            })
        }
        return res.status(200).json({
            message: "Student fetched successfully",
            data: getSingle
        })
    }catch (error){
        return res.status(500).json({
            message: error.message
        })
    }
}

//UPDATE STUDENT :
const updateStudent = async (req, res) => {
    try{
        const { id } = req.params
        const { name } = req.body
        const update = await studentModel.findByIdAndUpdate(id, { 
            name
        }, { new: true })
        return res.status(200).json({
            message: "Student updated successfully",
            data: update
        })
    }catch (error){
        return res.status(500).json({
            message: error.message
        })
    }
}

// DELETE STUDENT :
const deleteStudent = async (req, res) => {
    try{
        const { userId } = req.params
        const deleteStudent = await studentModel.findByIdAndDelete(userId)
        return res.status(200).json({
            message: "Student deleted successfully",
            data: deleteStudent
        })
    }catch (error){
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { createStudent, getSingleStudent, updateStudent, deleteStudent}
