const express = require('express')
const app = express();
const cors = require('cors');
const { get } = require('express/lib/response');
const port = process.env.port || 5000;
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('i am using node first time in my life')
});
const users = [
    { id: 1, name: "Tamim", email: "tamim@gmail.com" },
    { id: 2, name: "Tanvir", email: "tamim@gmail.com" },
    { id: 3, name: "Arafat", email: "tamim@gmail.com" },
    { id: 4, name: "nur", email: "tamim@gmail.com" },
    { id: 5, name: "Hossain", email: "tamim@gmail.com" },
]
app.get('/users', (req, res) => {
    console.log(req.query)
    if (req.query.name) {
        const search = req.query.name
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    res.send(users)
});
app.get('/users/:id', (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    res.send(user)
});
app.post('/users', (req, res) => {
    console.log('request', req.body)
    const user = req.body
    user.id = users.length + 1
    users.push(user)
    res.send(user)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})