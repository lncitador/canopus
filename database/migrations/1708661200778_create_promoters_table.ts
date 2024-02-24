import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'promoters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v7()').knexQuery)
        .notNullable()
      table.string('company_name').notNullable()
      table.string('document').notNullable()
      table.uuid('address_id').unsigned().references('addresses.id').onDelete('CASCADE').nullable()
      table.uuid('user_id').unsigned().references('users.id').onDelete('CASCADE').nullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
