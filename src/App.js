import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddUsers from './components/AddUsers'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Login from './components/Login'
import Records from './components/Records'

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/add' element={<><Header/><AddUsers/></>}/>
          <Route path='/records' element={<><Header/><Records/></>}/>
          <Route path='/' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App