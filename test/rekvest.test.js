const rekvest = require('../index.js')

describe('rekvest', () => {
  it('should parse simple requests', () => {
    const req = {
      url: '/',
      headers: {
        host: 'localhost:3000'
      },
      socket: {}
    }
    rekvest(req)
    expect(req.protocol).toBe('http:')
    expect(req.port).toBe('3000')
    expect(req.pathname).toBe('/')
    expect(req.path).toBe('/')
  })

  it('should parse requests with query params', () => {
    const req = {
      url: '/?hello=1',
      headers: {
        host: 'localhost:3000'
      },
      socket: {}
    }
    rekvest(req)
    expect(req.protocol).toBe('http:')
    expect(req.port).toBe('3000')
    expect(req.pathname).toBe('/')
    expect(req.query.hello).toBe('1')
    expect(req.path).toBe('/?hello=1')
  })
})
