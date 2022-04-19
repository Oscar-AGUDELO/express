const express = require('express');
const PORT = 8080;
const app = express();

const users = [
    {
        id:1,
        name: "coucou",
    },
    {
        id:2,
        name: "sds",
    },
    {
        id:3,
        name: "ewg",
    },
]

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
        res.send(user);
        } else {
            res.sendStatus(404)
        }
    res.send(users);
})
app.get("/users", (req, res) => {
    res.send(users);
})




app.get("/", (request, response) => {
    response.send("Hello coucou")
})

app.listen(PORT, () => {
    console.log('server run')
})