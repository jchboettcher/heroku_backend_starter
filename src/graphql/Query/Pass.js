const User = require('../../models/User')
const { hashPassword } = require('../auth')

const checkPass = async (obj, { displayName, password }, context) => {
  try {
    const hashed = await hashPassword(password)
    const user = await User.query().findOne({
      'displayName': displayName, 
      'password': hashed,
    })
    return user
  } catch (error) {
    console.warn(error)
    // throw new Error('failed to get user by name')
    throw error
  }
}

const resolver = {
  Query: {
    checkPass,
  },
}

module.exports = resolver
