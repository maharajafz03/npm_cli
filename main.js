const express = require('express')

const app = express();
const Port = 8909

app.get('/', (req, res) => {
    res.send("hello_welcome")
})

app.listen(Port, () => {
    console.log(`server is running on ${Port}`)
})