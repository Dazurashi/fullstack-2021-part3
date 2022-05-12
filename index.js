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



app.get('/api/persons', (request, response) => {
    Person.find({}).then(persons => {
        response.json(persons)
    })
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(`<p>Phonebook has info for ${persons.length} people</p>` + date)
})

app.get("/api/persons/:id", (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person)
    })
    console.log(person)

    if(person){
        response.json(person)
    }else{
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = persons.filter(person => person.id !== id)
    console.log(`Person ${id} deleted`)
    response.status(204).end()
  })

const generateId = () => { 
    const maxId = persons.length > 0 ? Math.max(...persons.map(n => n.id)) : 0
    return maxId + 1
}

app.post('/api/persons', (request, response) => {
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
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

