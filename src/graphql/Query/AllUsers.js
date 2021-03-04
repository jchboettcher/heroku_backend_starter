const User = require('../../models/User')

const allUsers = async () => {
  try {
    const users = await User.query().where('score','>',0).orderBy('score','DESC','rank','ASC')
    return users
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    // throw new Error('failed to get users')
    throw error
  }
}
const resolver = {
  Query: { allUsers },
}

module.exports = resolver
