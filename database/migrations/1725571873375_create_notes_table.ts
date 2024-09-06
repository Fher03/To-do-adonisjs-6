import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'notes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name', 254).notNullable().unique()
      table.string('description', 254).notNullable()
      table.timestamp('created_at').nullable()
      table.timestamp('updated_at').notNullable()
      table.integer('created_by').notNullable().references('users.id')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
