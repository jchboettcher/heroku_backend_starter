const { createTableIfNotExists } = require('../helpers')

exports.up = async knex => createTableIfNotExists(knex, 'users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('displayName')
    .unique()
    .notNullable()

  table.integer('score').notNullable().defaultTo(1)
  table.integer('rank').notNullable()

  table.string('createdAt').notNullable()
  table.string('updatedAt').notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
