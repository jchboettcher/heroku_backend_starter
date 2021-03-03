const User = require('../../models/User')

const userByName = async (obj, { displayName }, context) => {
  try {
    const user = await User.query().findOne('displayName', displayName)
    return user
  } catch (error) {
    console.warn(error)
    // throw new Error('failed to get user by name')
    throw error
  }
}

const resolver = {
  Query: {
    userByName,
  },
}

module.exports = resolver
