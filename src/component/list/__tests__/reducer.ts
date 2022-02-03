import { getDataForClientReducer, initialState } from '../store'
import * as A from '../store/action'

describe('test reducer', () => {
  it('sould return the default data', () => {
    const result = getDataForClientReducer(undefined, A.initializeMissionNews)

    const expected = {
      selected: undefined,
      list: [
        {
          id: 1,
          launchName: 'Marian',
          date: 'now',
          details:
            'a lot of excitement took over every single sould living on Earth, since the achievement of landing on Mars',
        },
        {
          id: 2,
          launchName: 'Iulia',
          date: 'now',
          details:
            'a lot of excitement took over every single sould living on Earth, since the achievement of finding life on Europa, organic life!',
        },
      ],
    }

    expect(result).toEqual(expected)
  })

  it('sould return correct data for INITIALIZE_NEWS', () => {
    const list = [
      {
        id: 1,
        launchName: 'Marian',
        date: 'now',
        details:
          'a lot of excitement took over every single sould living on Earth, since the achievement of landing on Mars',
      },
      {
        id: 2,
        launchName: 'Iulia',
        date: 'now',
        details:
          'a lot of excitement took over every single sould living on Earth, since the achievement of finding life on Europa, organic life!',
      },
    ]

    const result = getDataForClientReducer(
      initialState,
      A.initializeMissionNews(list)
    )
    const expected = {
      selected: undefined,
      list,
    }

    expect(result).toEqual(expected)
  })

  it('sould return correct data for SELECT_NEWS', () => {
    const list = [
      {
        id: 1,
        launchName: 'Marian',
        date: 'now',
        details:
          'a lot of excitement took over every single sould living on Earth, since the achievement of landing on Mars',
      },
      {
        id: 2,
        launchName: 'Iulia',
        date: 'now',
        details:
          'a lot of excitement took over every single sould living on Earth, since the achievement of finding life on Europa, organic life!',
      },
    ]

    const result = getDataForClientReducer(initialState, A.selectNews(2))
    const expected = {
      selected: {
        id: 2,
        launchName: 'Iulia',
        date: 'now',
        details:
          'a lot of excitement took over every single sould living on Earth, since the achievement of finding life on Europa, organic life!',
      },
      list,
    }

    expect(result).toEqual(expected)
  })
})
