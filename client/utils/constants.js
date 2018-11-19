const location = global.location || {
  hostname: 'localhost',
  protocol: 'http:'
}

const CLIENT_URL = `${location.protocol}//${location.hostname}:8080`
const INGREDIENTS_URL = '/ingredients'

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDws1xGENVLDcSl6qtQQVREX1Ca9LuBG5o',
  authDomain: 'pokesi-da9d5.firebaseapp.com',
  databaseURL: 'https://pokesi-da9d5.firebaseio.com',
  storageBucket: 'pokesi-da9d5.appspot.com',
  messagingSenderId: '132447292162'
}

const ASSETS = [
  'manifest.json',

  'index.html',
  '404.html',

  'index.js',

  'sanitize.css',
  'styles.css',

  'fonts/BebasNeue-Regular.otf',
  'fonts/BebasNeue-Regular.ttf',

  'img/back.png',
  'img/close.png',
  'img/gluten.png',
  'img/share.png',

  "img/favicon/favicon.ico",
  "img/favicon/16x16.png",
  "img/favicon/32x32.png",
  "img/favicon/48x48.png",
  "img/favicon/57x57.png",
  "img/favicon/60x60.png",
  "img/favicon/70x70.png",
  "img/favicon/72x72.png",
  "img/favicon/76x76.png",
  "img/favicon/96x96.png",
  "img/favicon/114x114.png",
  "img/favicon/120x120.png",
  "img/favicon/144x144.png",
  "img/favicon/150x150.png",
  "img/favicon/152x152.png",
  "img/favicon/180x180.png",
  "img/favicon/192x192.png",
  "img/favicon/310x310.png",
  "img/favicon/512x512.png"
]

module.exports = {
  ASSETS,
  CLIENT_URL,
  FIREBASE_CONFIG,
  INGREDIENTS_URL
}
