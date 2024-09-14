import { NoteFactory } from '#database/factories/note_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await NoteFactory.createMany(5)
  }
}
