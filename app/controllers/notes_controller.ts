import Note from '#models/note'
import type { HttpContext } from '@adonisjs/core/http'

export default class NotesController {
  async home({ view }: HttpContext) {
    const notes = await Note.getNotes()
    return view.render('pages/home', { notes })
  }

  async note({ view, params }: HttpContext) {
    const note = await Note.getNotesById(params.id)
    return view.render('pages/notes/index', { note })
  }
}
