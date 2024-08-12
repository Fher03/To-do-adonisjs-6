import fs from 'node:fs/promises'

export default class NoteService {
  static async readNotes() {
    let content = await fs.readFile('resources/notes/notes.json', { encoding: 'utf8' })
    const parsedContent = JSON.parse(content)
    return parsedContent
  }
}
