var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Employee_Id: {
    type: String,
    // required: true
},
Asset_Number:{
    type: String,
    // required:true
},
Name:{
    type: String,
    // required: true
},

MAC_Address:{
    type: String,
    // required: true
},
Comment:{
    type: String,
    // required: true
},



});

module.exports = mongoose.model('Tasks1', TaskSchema);