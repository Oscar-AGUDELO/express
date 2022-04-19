const express = require('express');
const PORT = 8080;
const app = express();

app.get("/", (request, response) => {
    response.send("Hello coucou")
})

app.listen(PORT, () => {
    console.log('server run')
})