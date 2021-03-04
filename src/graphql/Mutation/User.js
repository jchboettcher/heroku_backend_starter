// Import Objection Models Here!
const User = require('../../models/User')
const { hashPassword } = require('../auth')

// eslint-disable-next-line no-unused-vars
const addUser = async (obj, { input }, context) => {
  try {
    const num = await User.query().resultSize()
    const time = (new Date()).getTime().toString()
    const hashed = await hashPassword(input.password)
    console.log(hashed, input.password)
    input = { rank: num + 1, updatedAt: time, password: hashed, displayName: input.displayName }
    console.log(input)
    const user = await User.query().insert(input).returning('*')
    return user
  } catch (error) {
    // eslint-disable-next-line no-console
    // console.warn(error)
    return null
    // throw new Error('failed to insert user')
    // throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    addUser,
  },
}

module.exports = resolver
