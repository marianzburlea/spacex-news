type clientType = 'wowdop' | 'spacex'

interface ClientMap {
  spacex: string
  wowdop: string
}

export const getApi = (client: clientType = 'spacex', limit: number = 10) => {
  const clientMap: ClientMap = {
    spacex: `https://api.spacexdata.com/v3/launches?limit=${limit}`,
    wowdop: `https://wowdop.com/v3/launches?limit=${limit}`,
  }

  return clientMap[client]
}
