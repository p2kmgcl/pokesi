import { api, getFile } from '../utils/api'
import { ASSETS, INGREDIENTS_URL, CLIENT_URL } from "../utils/constants";

/**
 * Adds client base code to cache
 * @param {Cache} cache
 */
async function addClientToCache(cache) {
  await Promise.all(
    ASSETS.map(async (asset) => {
      const assetURL = `${CLIENT_URL}/${asset}`

      try {
        await cache.add(assetURL)
      } catch (error) {
        console.error(`Failed to add ${assetURL}`, error)
        throw error
      }
    })
  )
}

/**
 * Add all ingredients to cache
 * @param {Cache} cache
 */
async function addIngredientsToCache(cache) {
  try {
    const ingredients = await api(INGREDIENTS_URL)

    await cache.put(INGREDIENTS_URL, ingredients)

    await Promise.all(
      ingredients.map(async (ingredient) => {
        const imageURL = await getFile(ingredient.image)

        try {
          cache.add(imageURL)
        } catch (error) {
          console.error(`Failed to add ${imageURL}`)
          throw error
        }
      })
    )
  } catch(error) {
    console.log('Failed to add /ingredients', error)
    throw error
  }
}

/**
 * Removes all existing caches except the given cacheVersion
 * @param {string} cacheVersion
 */
function clearOldCaches(cacheVersion) {
  return caches.keys().then(cacheNames => {
    return Promise.all(
      cacheNames
        .filter(cacheName => cacheName !== cacheVersion)
        .map(cacheName => {
          console.log(`Removing cache ${cacheName}`)
          caches.delete(cacheName)
        })
    )
  })
}

export {
  addClientToCache,
  addIngredientsToCache,
  clearOldCaches
}
