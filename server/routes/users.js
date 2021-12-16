const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

//model imports
const Users = require('../models/users');

//middleware imports
const usersMiddleware = require('../middlewares/users')

router.post('/create',
usersMiddleware.validateRegisterFieldsNotEmpty,
usersMiddleware.validateUniqueUserId,
usersMiddleware.validateUniqueEmail,
usersMiddleware.validatePasswordLength,
async (req, res) => {
    try {
        const {
            userId,
            password,
            email,
            name,
            lastName,
            dateOfBirth,
            country,
        } = req.body;

        //password hashing
        bcrypt.hash(password, 10, async function(err, hash) {
            const newUser = new Users({
                userId,
                password: hash,
                email,
                name,
                lastName,
                dateOfBirth,
                country,
                admin: true
            });
            await newUser.save();

            res.status(201).json(newUser);
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({});

        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

module.exports = router;