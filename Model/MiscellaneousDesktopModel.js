var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
Asset_Number: {
    type: String,
    
},

Desktop:{
    type: String,
    
},

MAC_Address:{
    type: String,
    
},


});

module.exports = mongoose.model('Tasks3', TaskSchema);