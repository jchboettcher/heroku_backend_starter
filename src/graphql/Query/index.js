const merge = require('lodash.merge')
const User = require('./User')
const AllUsers = require('./AllUsers')
// const Pass = require('./Pass')

const resolvers = [User, AllUsers]

module.exports = merge(...resolvers)
