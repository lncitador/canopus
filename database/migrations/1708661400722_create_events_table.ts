import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table
        .uuid('id')
        .primary()
        .defaultTo(this.db.rawQuery('uuid_generate_v7()').knexQuery)
        .notNullable()
      table
        .uuid('promoter_id')
        .unsigned()
        .references('promoters.id')
        .onDelete('CASCADE')
        .notNullable()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('image').notNullable()
      table.timestamp('start_date').notNullable()
      table.timestamp('end_date').notNullable()
      table.float('price').notNullable()
      table
        .uuid('address_id')
        .unsigned()
        .references('addresses.id')
        .onDelete('CASCADE')
        .notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
