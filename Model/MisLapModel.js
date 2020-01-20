var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({

  Asset_Number: {
    type: String,
  },


  MAC_Address: {
    type: String,
  },

  ChargerAsset_Number: {
    type: String,
  },
  Comment: {
    type: String,
  }

});

module.exports = mongoose.model('Tasks4', TaskSchema);