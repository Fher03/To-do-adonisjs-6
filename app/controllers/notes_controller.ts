import Note from '#models/note'
import NoteService from '#services/note_service'
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

  async createNote({ request, response }: HttpContext) {
    const { title, description } = request.only(['title', 'description'])
    Note.createNote(title, description)
    return response.redirect('/')
  }

  async destroy({ response, params }: HttpContext) {
    NoteService.deleteNotes(params.id)
    return response.redirect('/')
  }
}
