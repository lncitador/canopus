import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare street: string

  @column()
  declare number: string

  @column()
  declare neighborhood: string

  @column()
  declare city: string

  @column()
  declare state: string

  @column()
  declare country: string

  @column()
  declare zipcode: string

  @column()
  declare userId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
