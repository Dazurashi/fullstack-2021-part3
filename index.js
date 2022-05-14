require('dotenv').config()
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")

const Person = require('./models/person')

app.use(express.json())
app.use(morgan("tiny"))
app.use(cors())
app.use(express.static("build"))




let persons = [
   {
       id: 1,
       name: "Arto Hellas",
       number: "040-123456"
   },
   {
       id: 2,
       name: "Ada Lovelace",
       number: "39-44-5323523"
   },
   {
       id: 3,
       name: "Dan Abramov",
       number: "12-43-234345"
   },
   {
       id: 4,
       name: "Mary Poppendick",
       number: "39-23-6423122"
   }
]



app.get('/api/persons', (request, response, next) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
    .catch((error) => next(error))
})

app.get('/info', (request, response, next) => {
    Person.find({}).then((persons) => {
        const people = persons.length;
        const date = new Date();
        response.send(`<p>Phonebook has info for ${people} people</p>` + date);
      })
      .catch((error) => next(error));
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
      .then((person) => {
        if (person) {
          response.json(person.toJSON())
        } else {
          response.status(404).end()
        }
      })
      .catch((error) => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
    Person.findByIdAndDelete(id).then(() => {
        response.status(204).end()
    })
    .catch((error) => next(error))
  })

const generateId = () => { 
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxId + 1
}

app.post('/api/persons', (request, response, next) => {
    const body = request.body
    console.log(body.name)
    // //console.log(persons.find(person => person.name === body.name).name)
    // if (body.name === persons.find(person => person.name === body.name).name){
    //     return response.status(400).json({
    //         error: "name must be unique"
    //     })
    // }

    if (body.name === "") {
        return response.status(400).json({ 
            error: "no name given" 
        })
    }
    if (body.number === "") {
        return response.status(400).json({ 
            error: "no number given" 
        })
    }
    const person = new Person({
        id: generateId(),
        name: body.name,
        number: body.number  
    })
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const id = request.params.id
  
    const person = {
      name: request.body.name,
      number: request.body.number,
    }
  
    Person.findByIdAndUpdate(id, person, { new: true })
      .then((updatedPerson) => {
          response.json(updatedPerson)
      })
      .catch((error) => next(error))
})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    }else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
  
    next(error)
  }
  
app.use(errorHandler)


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

