import cache from '#services/cache_service'
import NoteService from '#services/note_service'
import { Exception } from '@adonisjs/core/exceptions'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Note extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  static async getNotes() {
    let notes = []
    const allNotes = await NoteService.readNotes()
    for (const note of allNotes) {
      const myNote = new Note()
      myNote.id = note.id
      myNote.name = note.title
      myNote.description = note.content
      myNote.createdAt = note.createdAt
      myNote.updatedAt = note.updatedAt
      notes.push(myNote)
    }
    return notes
  }

  static async getNotesById(id: number) {
    try {
      if (cache.has(id)) {
        console.log(`Cache hit: ${id}`)
        return cache.get(id)
      }
      const notes = await this.getNotes()
      const note = notes.find((thisNote) => thisNote.id === id)
      cache.set(id, note)
      return note
    } catch (error) {
      throw new Exception(`Could not found a note with the id: ${id}`)
    }
  }

  static async createNote(title: string, description: string) {
    let notes = await NoteService.readNotes()
    const myNewNote = new Note()
    myNewNote.id = notes.length + 1
    myNewNote.name = title
    myNewNote.description = description
    NoteService.writeNotes(myNewNote)
  }

  static async updateNote(id: number) {
    const note = await this.getNotesById(id)
    return note
  }
}
