const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  displayName: casual.name,
  rank: casual.integer(0, 10),
  updatedAt: (new Date()).getTime().toString(),
}))

const usersData = []

for (let i = 0; i < 10; ++i) {
  usersData.push(casual.user)
}

module.exports = usersData
