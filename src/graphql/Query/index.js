const merge = require('lodash.merge')
const User = require('./User')
const AllUsers = require('./AllUsers')

const resolvers = [User, AllUsers]

module.exports = merge(...resolvers)
