const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const num = process.argv[4]

const url = `mongodb+srv://fullstack2021:${password}@cluster0.b6pee.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: num
})

if (process.argv.length > 3) {
  // eslint-disable-next-line no-unused-vars
  person.save().then(data => {
    console.log(`Name: ${name} Number: ${num} added`)
    mongoose.connection.close()
  })
}else{
  console.log('phonebook:')
  Person.find({}).then(data => {
    data.forEach(person => {
      console.log(person.name + ', ' + person.number)
    })
    mongoose.connection.close()
  })
}