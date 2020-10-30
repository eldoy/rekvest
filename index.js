const URL = require('url').URL
const qs = require('querystring')

module.exports = function(req) {
  const host = req.headers['x-forwarded-host'] || req.headers.host
  const proto = req.headers['x-forwarded-proto'] || (req.socket.encrypted ? 'https' : 'http')

  const url = new URL(`${proto}://${host}${req.url}`)

  for (const key in url) {
    req[key] = url[key]
  }
  console.log(url)
  req.query = url.search ? qs.parse(url.search.slice(1)) : {}
  req.ip = req.socket.remoteAddress
}
