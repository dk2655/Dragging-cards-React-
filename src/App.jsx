import { useState } from 'react'

import './App.css'
import Home from './screens/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom"
import Login from './screens/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App
