import Note from '#models/note'
import type { HttpContext } from '@adonisjs/core/http'

export default class NotesController {
  async home({ view }: HttpContext) {
    const notes = await Note.all()
    return view.render('pages/home', { notes })
  }

  async searchNote({ view, params }: HttpContext) {
    const note = await Note.findBy('id', params.id)
    return view.render('pages/notes/index', { note })
  }

  async createNote({ request, response }: HttpContext) {
    const { title, description } = request.only(['title', 'description'])
    await Note.create({ name: title, description: description, createdBy: 1 })
    return response.redirect('/')
  }

  async destroy({ response, params }: HttpContext) {
    const note = await Note.find(params.id)
    await note!.delete()
    return response.redirect('/')
  }
}
