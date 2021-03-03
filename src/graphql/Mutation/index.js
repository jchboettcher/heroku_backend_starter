const merge = require('lodash.merge')
const User = require('./User')
const ChangeScore = require('./ChangeScore')

const resolvers = [User, ChangeScore]

module.exports = merge(...resolvers)
