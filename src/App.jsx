import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='about' element={<About/>>}>

        </Route>
      </Routes>
    </Router>
     
    </>
  )
}

export default App
