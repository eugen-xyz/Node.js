'use strict';

const express = require('express');

/*
    The Router is an object on the base express module.
    This Router object will have similar methods (.get, .post, .patch, .delete) to the 
    app object we have previously been using.
*/
const router = express.Router();

// this would ideally be a database but we will start with something simple
const users = []; 

// this will help us identify unique users.
var id = 1; 


router
    .route('')
    .get((req, res) => {
        return res.json(users);
    })
    .post((req, res) => {
        users.push({
            name: req.body.name,
            id: ++id
        });
        return res.json({
            message: "Created!"
        });
    });


router
    .route('/:id')
    .get((req, res) => {
        const user = users.find(val => val.id === Number(req.params.id));
        return res.json(user);
    })
    .patch((req, res) => {
        user.name = req.body.name
        return res.json({
            message: "Updated!"
        });
    })
    .delete((req, res) => {
        users.splice(user.id, 1);
        return res.json({
            message: "Deleted!"
        }) 
    });



// /* instead of app.get . . . */
// router.get('', (req, res) => {
//     return res.json(users);
// });

// router.post('', (req, res) => {

//     users.push( {
//         name: req.body.name,
//         id: ++id
//     });

//     return res.json({
//         message: "Created!"
//     });
// });

// router.patch('/:id', (req, res) => {

//     const user = users.find(val => val.id === Number(req.params.id));
//     user.name = req.body.name;

//     return res.json({
//         message: "Updated!"
//     });
// });

// router.delete('/:id', (req, res) => {

//     const userIndex = users.findIndex(val => val.id === Number(req.params.id));
//     users.splice(userIndex, 1);

//     return res.json({
//         message: "Deleted!"
//     });
// })

module.exports = router;

