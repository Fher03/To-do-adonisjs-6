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

export const WorkNotesFactory = factory
  .define(Note, async ({ faker }) => {
    return {
      name: faker.hacker.phrase(),
      description: faker.lorem.paragraph(2),
      createdBy: 2,
      noteType: 'WORK',
    }
  })

  .build()
