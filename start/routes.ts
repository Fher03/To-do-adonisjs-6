/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router
  .get('/', (ctx) => {
    return ctx.view.render('pages/home')
  })
  .as('notes.show')

router
  .get('/notes/:id', (ctx) => {
    return ctx.view.render('pages/notes/index', {
      title: 'Mi primera Nota',
      content: 'lorem ipsum',
      creationDate: '11/08/24',
      modifiedDate: '11/08/24',
    })
  })
  .where('id', router.matchers.number())
  .as('note.show')
