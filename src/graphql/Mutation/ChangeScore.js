// Import Objection Models Here!
const { max } = require('../../lib/knex')
const User = require('../../models/User')

// eslint-disable-next-line no-unused-vars
const updateScore = async (obj, { id, newScore }, context) => {
  try {
    const curr = (await User.query().findById(id)).score
    if (newScore > curr + 1) {
        return 0
    }
    if (newScore <= curr) {
        return 1
    }
    const num = await User.query().where('score', '>=', newScore).resultSize()
    const newDate = (new Date()).getTime().toString()
    const user = await User.query().patch({
      score: newScore,
      rank: num + 1,
      updatedAt: newDate,
    }).findById(id)
    return 2
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
