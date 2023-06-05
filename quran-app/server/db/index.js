const mongoose = require('mongoose')

async function main(){
  await mongoose.connect;
}
mongoose
  .connect('mongodb://127.0.0.1:27017/cinema', { useNewUrlParser: true })
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db
