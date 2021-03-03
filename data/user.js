const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  displayName: casual.name,
  email: casual.email,
  password: casual.password,
  rank: casual.integer(0, 10),
  createdAt: (new Date()).getTime().toString(),
  updatedAt: (new Date()).getTime().toString(),
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
