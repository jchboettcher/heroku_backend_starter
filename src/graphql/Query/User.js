const User = require('../../models/User')
const { hashPassword, comparePassword } = require('../auth')

const userByName = async (obj, { displayName, password }, context) => {
  try {
    const hashed = await hashPassword(password)
    const user = await User.query().findOne({
      'displayName': displayName,
    })
    if (!user) {
      return null
    }
    if (await comparePassword(password, user.password)) {
      return user
    }
    return null
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
