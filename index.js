const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Terrific chef  is running')
});

app.listen(port, () => {
    console.log(`Terrific chef API is running on port: ${port}`)
})