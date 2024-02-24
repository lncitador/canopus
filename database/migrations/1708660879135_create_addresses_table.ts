import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v7()').knexQuery)
        .notNullable()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('neighborhood').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('country').notNullable()
      table.string('zipcode').notNullable()
      table.uuid('user_id').unsigned().references('users.id').onDelete('CASCADE').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
