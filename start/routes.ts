/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NotesController = () => import('#controllers/notes_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [NotesController, 'home']).as('notes.show')

router
  .get('/notes/:id', [NotesController, 'note'])
  .where('id', router.matchers.number())
  .as('note.show')

// router.put('/notes/edit/:id', async (ctx) => {
//   return ctx.view.render('')
// })
