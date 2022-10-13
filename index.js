const express = require('express')
const cors = require('cors');
const app = express()
const port = 8080
app.use(cors())
app.use(express.json())

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const books = [
    {id: 1, name: 'The Last Wish', price: 20.25},
    {id: 2, name: 'Naksitrallid', price: 15.95},
    {id: 3, name: 'Minecraft builders guide', price: 4.95},
    {id: 4, name: 'Varastatud oranž jalgratas', price: 5.95},
    {id: 5, name: 'The Art Of War', price: 20.95},
    {id: 6, name: "Harry Potter and the Sorcerer's stone", price: 31.95},
    {id: 7, name: 'Regretting you', price: 15.95},
    {id: 8, name: 'Tunnistaja', price: 37.95},
    {id: 9, name: 'Putini inimesed', price: 20.95},
]

app.get('/books', (req, res) => {
    res.send(books)
})



 app.listen(port, () => {
    console.log(`API up at: http://localhost:${port}`)
 })

 
