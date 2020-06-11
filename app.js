'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res) => {

    return res.json("Start with /users");
});

app.listen(3000, () => {
    console.log("Server is listening to port 3000");
})