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

//Pagina Principal
router.get('/', [NotesController, 'home']).as('notes.home.show')

//Personal Notes
router.get('/notes/personal', [NotesController, 'personalNotes']).as('notes.personal.show')

//Work Notes
router.get('/notes/work', [NotesController, 'workNotes']).as('notes.work.show')

//Mostrar notas por ID
router
  .get('/notes/:id', [NotesController, 'searchNote'])
  .where('id', router.matchers.number())
  .as('note.show')

//Crear Notas
router
  .get('/notes/create', ({ view }) => {
    return view.render('pages/notes/create')
  })
  .as('notes.create')

router.post('/create/note', [NotesController, 'createNote']).as('creating.note')

//Eliminar Notas
router.get('/notes/cache/:id', [CachesController, 'destroy'])
router.post('/delete/note/:id', [NotesController, 'destroy']).as('note.delete')
