const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const chef = require('./data/chefAndRecipe.json')

app.get('/', (req, res) => {
    res.send('Terrific chef  is running')
});

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Terrific chef API is running on port: ${port}`)
})