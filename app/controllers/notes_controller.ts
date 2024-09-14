import Note from '#models/note'
import type { HttpContext } from '@adonisjs/core/http'

export default class NotesController {
  async home({ view }: HttpContext) {
    const personalNotes = await Note.query()
      .apply((scope) => scope.personalNotes())
      .orderBy('id', 'desc')
      .limit(9)
    const workNotes = await Note.query()
      .apply((scope) => scope.workNotes())
      .orderBy('id', 'desc')
      .limit(9)
    return view.render('pages/home', { personalNotes, workNotes })
  }

  async personalNotes({ view }: HttpContext) {
    const personalNotes = await Note.query()
      .apply((scope) => scope.personalNotes())
      .orderBy('id', 'desc')
    console.log(personalNotes)
    return view.render('pages/personal_notes', { personalNotes })
  }

  async searchNote({ view, params }: HttpContext) {
    const note = await Note.findBy('id', params.id)
    return view.render('pages/notes/index', { note })
  }

  async createNote({ request, response }: HttpContext) {
    const { title, description, type } = request.only(['title', 'description', 'type'])
    const newNote = await Note.create({
      name: title,
      description: description,
      createdBy: 1,
      noteType: type,
    })
    console.log(newNote)
    return response.redirect('/')
  }

  async destroy({ response, params }: HttpContext) {
    const note = await Note.find(params.id)
    await note!.delete()
    return response.redirect('/')
  }

  async workNotes({ view }: HttpContext) {
    const workNotes = await Note.query()
      .apply((scope) => scope.workNotes())
      .orderBy('id', 'desc')
    return view.render('pages/work_notes', { workNotes })
  }
}
