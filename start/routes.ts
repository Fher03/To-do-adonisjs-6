/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const NotesController = () => import('#controllers/notes_controller')
const CachesController = () => import('#controllers/caches_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [NotesController, 'home']).as('notes.show')

router
  .get('/notes/:id', [NotesController, 'note'])
  .where('id', router.matchers.number())
  .as('note.show')

//Needs functionality
router.get('/notes/cache/:id', [CachesController, 'destroy'])

router
  .get('/notes/create', ({ view }) => {
    return view.render('pages/notes/create')
  })
  .as('notes.create')

router.post('/create/note', [NotesController, 'createNote'])
