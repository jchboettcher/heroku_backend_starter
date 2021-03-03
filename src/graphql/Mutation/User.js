// Import Objection Models Here!
const User = require('../../models/User')

// eslint-disable-next-line no-unused-vars
const addUser = async (obj, { input }, context) => {
  try {
    const num = await User.query().resultSize()
    const time = (new Date()).getTime().toString()
    input = { rank: num + 1, createdAt: time, updatedAt: time, ...input }
    const user = await User.query().insert(input).returning('*')
    return user
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // throw new Error('failed to insert user')
    throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addUser,
  },
}

module.exports = resolver
