import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import { FIREBASE_CONFIG } from './constants.js'

function initializeFirebase() {
  firebase.initializeApp(FIREBASE_CONFIG)
}

/**
 * Perform an HTTP request through fetch to the API server
 * @param {string} path
 * @return {Promise<Response>}
 */
async function api (path) {
  const database = firebase.database()
  const content = (await database.ref(path).once('value')).val()
  return content
}

function getFile (url) {
  return firebase.storage().ref(url).getDownloadURL()
}

export { api, getFile, initializeFirebase }
export default api
