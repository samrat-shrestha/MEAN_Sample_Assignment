const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Beer = new Schema({
   name: {
      type: String
   },
   genre: {
      type: String
   },
   description: {
      type: String
   },
   imagePath: {
      type: String
   }
}, {
   collection: 'beers'
})
module.exports = mongoose.model('Beer', Beer)