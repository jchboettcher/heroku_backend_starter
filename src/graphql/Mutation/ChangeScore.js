// Import Objection Models Here!
const User = require('../../models/User')

// eslint-disable-next-line no-unused-vars
const updateScore = async (obj, { id }, context) => {
  try {
    const user = await User.query().findById(id).returning('*')
    const newScore = user.score + 1
    const num = await User.query().where('score', '>=', newScore).resultSize()
    const newDate = (new Date()).getTime().toString()
    const newUser = await User.query().patch({
      score: newScore,
      rank: num + 1,
      updatedAt: newDate,
    }).findById(id).returning('*')
    return newUser
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // throw new Error('failed to update score')
    throw error
  }
}

// This resolver object mirrors the shape of your TypeDefs
const resolver = {
  Mutation: {
    updateScore,
  },
}

module.exports = resolver
