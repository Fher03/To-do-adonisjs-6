import NoteService from '#services/note_service'

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
      myNote.createdAt = note.creationDate
      myNote.updatedAt = note.modifiedDate
      notes.push(myNote)
    }
    return notes
  }

  static async getNotesById(id: number) {
    const notes = await Note.getNotes()
    const note = notes.find((thisNote) => thisNote.id === id)
    return note
  }
}
