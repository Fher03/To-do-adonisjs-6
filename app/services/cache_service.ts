class CacheService {
  #store: Record<string, any> = {}

  has(key: number) {
    return key in this.#store
  }

  get(key: number) {
    return this.#store[key]
  }

  set(key: number, value: any) {
    this.#store[key] = value
  }

  delete(key: number) {
    delete this.#store[key]
  }
}

const cache = new CacheService()
export default cache
