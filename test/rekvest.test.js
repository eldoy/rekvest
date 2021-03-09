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

  it('should parse requests urls with special characters', () => {
    const req = {
      url: '/æøå.html',
      headers: {
        host: 'localhost:3000'
      },
      socket: {}
    }
    rekvest(req)
    expect(req.protocol).toBe('http:')
    expect(req.port).toBe('3000')
    expect(req.pathname).toBe('/æøå.html')
    expect(req.path).toBe('/æøå.html')
  })

  it('should parse requests urls with chinese characters', () => {
    const req = {
      url: '/測試.html',
      headers: {
        host: 'localhost:3000'
      },
      socket: {}
    }
    rekvest(req)
    expect(req.protocol).toBe('http:')
    expect(req.port).toBe('3000')
    expect(req.pathname).toBe('/測試.html')
    expect(req.path).toBe('/測試.html')
  })
})
