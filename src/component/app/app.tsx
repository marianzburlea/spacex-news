import { List } from '..'
import * as S from './app.style'

const App = ({ dataTestId }: { dataTestId?: string }) => {
  return (
    <S.App data-testid={dataTestId}>
      <S.Reset />

      <List client="spacex" />
    </S.App>
  )
}

export default App
