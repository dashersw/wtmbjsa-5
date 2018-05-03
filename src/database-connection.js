const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectionString = process.env.DB_URL || 'mongodb://localhost/wtm5'

mongoose.connect(connectionString)
