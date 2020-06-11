'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.get('/', function(req, res) {

    res.status(200)
        .json({ 
            message: "That's it!"
        })
})

app.get('/secret', (req, res) => {

    res.status(401)
        .json( {

            message: "Unauthorized"
        })
})

app.get('/instuctor/:name', function(req, res) {

    res.json({
        name: `${req.params.name}`
    })
})

app.listen(3000, function() {

    console.log('This server has started on port 3000')
})