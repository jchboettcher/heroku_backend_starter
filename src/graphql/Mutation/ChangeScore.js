// Import Objection Models Here!
const User = require('../../models/User')

// eslint-disable-next-line no-unused-vars
const updateScore = async (obj, { id, newScore }, context) => {
  try {
    const user = await User.query().findById(id).returning('*')
    const curr = user.score
    if (newScore > curr + 1) {
        return null
    }
    if (newScore <= curr) {
        return user
    }
    const num = await User.query().where('score', '>=', newScore).resultSize()
    const newDate = (new Date()).getTime().toString()
    const newuser = await User.query().patch({
      score: newScore,
      rank: num + 1,
      updatedAt: newDate,
    }).findById(id).returning('*')
    return newuser
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
