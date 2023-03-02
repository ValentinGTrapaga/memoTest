import { MemoBoard } from './components/MemoBoard'
import { getCards } from './utils'

function App() {
  const icons = getCards(10)

  return (
    <div className='App'>
      <h1>Memo game!</h1>
      <MemoBoard icons={icons} />
    </div>
  )
}

export default App
