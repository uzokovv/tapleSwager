import React, { useEffect } from 'react'
import Main from './main'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Headers from './components/header'
import Notfaund from './components/notFaund'
import Login from './components/login'
import Register from './components/register'

const App = () => {
  const navigite = useNavigate()

  useEffect(() => {
    getToken()
  }, [])

  function getToken() {
    let token = localStorage.getItem('token')
    console.log(token);
    if (navigite) {
      navigite("/login")
    }
  }

  return (
    <React.StrictMode>
      <Headers />
      <Routes >
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Notfaund />} />
      </Routes >
    </React.StrictMode>
  )
}

export default App