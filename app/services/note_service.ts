import fs from 'node:fs/promises'

export default class NoteService {
  static async readNotes() {
    let content = await fs.readFile('resources/notes/notes.json', { encoding: 'utf8' })
    const parsedContent = JSON.parse(content)
    return parsedContent
  }

  static async writeNotes(newNote: any) {
    let notes = await this.readNotes()
    notes.push(newNote)
    await fs.writeFile('resources/notes/notes.json', JSON.stringify(notes, null, 2))
  }

  static async deleteNotes(id: number) {
    let content = await this.readNotes()
    let newContent = content.filter((note: any) => note.id !== Number(id))
    await fs.writeFile('resources/notes/notes.json', JSON.stringify(newContent))
  }
}
