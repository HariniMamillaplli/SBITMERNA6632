const mongoose = require('mongoose');

const managementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  collegedetails: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('managementschema', managementSchema);
