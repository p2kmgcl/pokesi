import {
  initializeFirebase
} from './utils/api'

import {
  handleServiceWorkerInstalled,
  handleServiceWorkerActivated,
  handleServiceWorkerMessage,
  handleServiceWorkerFetch
} from './to-do/service-worker'

const CACHE_VERSION = '1'

initializeFirebase()

self.addEventListener('install', event => handleServiceWorkerInstalled(event, CACHE_VERSION))
self.addEventListener('activate', event => handleServiceWorkerActivated(event, CACHE_VERSION))
self.addEventListener('message', event => handleServiceWorkerMessage(event, CACHE_VERSION))
self.addEventListener('fetch', event => handleServiceWorkerFetch(event, CACHE_VERSION))
