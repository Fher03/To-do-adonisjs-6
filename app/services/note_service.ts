import fs from 'node:fs/promises'

export default class NoteService {
  static async readNotes() {
    let content = await fs.readFile('resources/notes/notes.json', { encoding: 'utf8' })
    const parsedContent = JSON.parse(content)
    return parsedContent
  }

  static async createNotes(newNote: any) {
    let notes = await this.readNotes()
    const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '/')
    newNote.createdAt = currentDate
    newNote.updatedAt = currentDate
    notes.push(newNote)
    console.log(newNote)
    await fs.writeFile('resources/notes/notes.json', JSON.stringify(notes, null, 2))
    console.log('Nota agregada')
  }
}
