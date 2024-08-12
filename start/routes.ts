/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import Note from '#models/note'
import router from '@adonisjs/core/services/router'

router
  .get('/', async (ctx) => {
    const notes = await Note.getNotes()
    return ctx.view.render('pages/home', { notes })
  })
  .as('notes.show')

router
  .get('/notes/:id', async (ctx) => {
    const note = await Note.getNotesById(ctx.params.id)
    return ctx.view.render('pages/notes/index', { note })
  })
  .where('id', router.matchers.number())
  .as('note.show')
