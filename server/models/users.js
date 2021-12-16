const mongoose = require('../connection');

const Users = mongoose.model('users', {
    userId: String,
    password: String,
    email: String,
    name: String,
    lastName: String,
    dateOfBirth: String,
    country: String,
    admin: Boolean,
})

module.exports = Users;