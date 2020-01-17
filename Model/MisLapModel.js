var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({

Asset_Number:{
    type: String,
    // required:true
},


MAC_Address:{
    type: String,
    // required: true
},
ChargerAsset_Number:{
    type: String,
    required: true
},
Mouse:{
    type:Boolean,
},
Keyboard:{
    type:Boolean,
},
Cables:{
    type:Boolean,
}




});

module.exports = mongoose.model('Tasks4', TaskSchema);