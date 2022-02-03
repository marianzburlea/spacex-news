import * as A from '../store/action'
import * as T from '../list.type'

describe('test action', () => {
  it('should do initialize news', () => {
    const initialData = { a: 1, b: 2 }
    const expected = {
      type: '[list] INITIALIZE_NEWS',
      data: initialData,
    }
    const result = A.initializeMissionNews(initialData)

    expect(result).toEqual(expected)
  })

  it('should select a news', () => {
    const id: number = 2
    const expected = {
      type: '[list] SELECT_NEWS',
      id: 2,
    }

    const result = A.selectNews(id)

    expect(result).toEqual(expected)
  })
})
