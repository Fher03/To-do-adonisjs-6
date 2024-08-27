import cache from '#services/cache_service'
import NoteService from '#services/note_service'
import { Exception } from '@adonisjs/core/exceptions'

export default class Note {
  declare id: number

  declare title: string

  declare content: string

  declare createdAt: string

  declare updatedAt: string

  static async getNotes() {
    let notes = []
    const allNotes = await NoteService.readNotes()
    for (const note of allNotes) {
      const myNote = new Note()
      myNote.id = note.id
      myNote.title = note.title
      myNote.content = note.content
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
    const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '/')
    const myNewNote = new Note()
    myNewNote.id = notes.length + 1
    myNewNote.title = title
    myNewNote.content = description
    myNewNote.createdAt = currentDate
    myNewNote.updatedAt = 'Not edited yet'
    NoteService.writeNotes(myNewNote)
  }

  static async updateNote(id: number) {
    const note = await this.getNotesById(id)
    return note
  }
}
