import cache from '#services/cache_service'
import type { HttpContext } from '@adonisjs/core/http'

export default class CachesController {
  async destroy({ params, response }: HttpContext) {
    await cache.delete(params.id)
    return response.redirect().back()
  }
}
