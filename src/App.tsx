import { Provider } from 'react-redux'
import { store } from './Components/store'
import Home from './Components/pages/Home'


function App() {

  return (
    <Provider store={store} >
          <Home/>
    </Provider>
  )
}

export default App
