import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare promoterId: string

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare image: string

  @column.dateTime()
  declare startDate: DateTime

  @column.dateTime()
  declare endDate: DateTime

  @column()
  declare price: number

  @column()
  declare addressId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
