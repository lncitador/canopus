import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Promoter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare companyName: string

  @column()
  declare document: string

  @column()
  declare addressId: number

  @column()
  declare userId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
