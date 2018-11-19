import { CLIENT_URL } from './constants'

const isClientURL = (url) => {
  let isClient = url.startsWith(CLIENT_URL)

  if (isClient) {
    const pathname = url.replace(CLIENT_URL, '')

    isClient = (
      (pathname === '/') ||
      (pathname === '/index.html') ||
      (pathname === '/summary') ||
      (/^\/ingredients\/([a-z\-]+)$/i.test(pathname))
    )
  }

  return isClient
}

export {
  isClientURL
}
