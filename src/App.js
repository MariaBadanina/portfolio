import { BrowserRouter as Router } from 'react-router-dom'
import MyCanvas from './components/fiber/MyCanvas'
import Content from './components/ui/Content'

function App() {
  return (
    <>
      <MyCanvas />
      <Router>
        <Content />
      </Router>
    </>
  )
}

export default App
