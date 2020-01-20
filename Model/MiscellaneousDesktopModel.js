var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  Asset_Number: {
    type: String,
  },

  Desktop: {
    type: String,
  },

  MAC_Address: {
    type: String,

  },
  Mouse: {
    type: Boolean,
  },
  Keyboard: {
    type: Boolean,
  },
  Cables: {
    type: Boolean,
  },
  Monitor: {
    type: Boolean,
  },
  Comment:{
    type:String,
  }

});

module.exports = mongoose.model('Tasks3', TaskSchema);