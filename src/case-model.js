const mongoose = require('mongoose')

const CaseSchema = mongoose.Schema({
  caseId: { type: String, unique: true },
  type: String,
  address: {
    state: String,
    city: String,
    street: String,
    houseNo: Number
  },
  openedAt: Date,
  updatedAt: Date,
  description: String,
  requester: {
    firstName: String,
    lastName: String,
    age: Number,
    gender: { type: String, enum: ['M', 'F', 'O'] },
  },
  phoneNumbers: [{
    type: { type: String },
    number: String
  }],
  location: {
    type: { type: String, enum: ['Point'] },
    coordinates: [Number]
  }
})

CaseSchema.index({ 'location': '2dsphere' })

const CaseModel = mongoose.model('Case', CaseSchema)

module.exports = CaseModel
