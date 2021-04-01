let ObjectId = require('mongodb').ObjectID

module.exports = {
  getObectId(params) {
    return ObjectId(params)
  }
}