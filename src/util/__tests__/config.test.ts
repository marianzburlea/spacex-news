import { getApi } from '..'

describe('Test config', () => {
  it('should return the correct api with a default limit of 10', () => {
    const restult = getApi('spacex')
    const expected = 'https://api.spacexdata.com/v3/launches?limit=10'

    expect(restult).toEqual(expected)
  })

  it('should return the correct api with a limit of 50', () => {
    const limit = 50
    const restult = getApi('wowdop', limit)
    const expected = `https://wowdop.com/v3/launches?limit=${limit}`

    expect(restult).toEqual(expected)
  })

  it('should return default spacex', () => {
    const restult = getApi()
    const expected = `https://api.spacexdata.com/v3/launches?limit=10`

    expect(restult).toEqual(expected)
  })
})
