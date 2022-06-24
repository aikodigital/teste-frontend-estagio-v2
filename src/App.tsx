import { Provider } from 'react-redux'
import Home from './Components/pages/Home'
import { store } from './Components/store'


function App() {

  return (
    <Provider store={store} >
          <Home/>
    </Provider>


  )
}

export default App
