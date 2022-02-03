import * as C from './constant'
import * as T from '../list.type'

export const initialState: T.State = {
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

export const getDataForClientReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case C.INITIALIZE_NEWS:
      return {
        ...state,
        list: action.data,
      }

    case C.SELECT_NEWS:
      return {
        ...state,
        selected: state.list.find(({ id }: { id: number }) => action.id === id),
      }

    default:
      return state
  }
}
