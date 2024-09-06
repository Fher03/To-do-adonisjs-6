import factory from '@adonisjs/lucid/factories'
import Note from '#models/note'

export const NoteFactory = factory
  .define(Note, async ({ faker }) => {
    return {
      name: faker.word.words(),
      description: faker.lorem.paragraph(),
      createdBy: 2,
    }
  })
  .build()
