import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: 1,
        name: 'Fher03',
        age: 20,
        email: 'fertg171103@gmail.com',
        password: 'root',
      },
      {
        id: 2,
        name: 'Monica',
        age: 19,
        email: 'monicaSanchez04@gmail.com',
        password: 'dodoty',
      },
    ])
  }
}
