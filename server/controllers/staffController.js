const Student = require('../models/staffschema');

// Create a staff
exports.createstaff = async (req, res) => {
  try {
    const staff = new Staff(req.body);
    await staffSchema.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Read all students
exports.getStaffss = async (req, res) => {
  try {
    const staffs = await staffSchema.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  try {
    const student = await StudentSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  try {
    await StudentSchema.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
