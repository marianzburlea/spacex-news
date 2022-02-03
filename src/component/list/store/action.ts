import * as T from './constant'

export const initializeMissionNews = (data: any) => ({
  type: T.INITIALIZE_NEWS,
  data,
})

export const selectNews = (id: number) => ({
  type: T.SELECT_NEWS,
  id,
})
