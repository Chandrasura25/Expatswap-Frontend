import { useState } from 'react'
import { Routes, Route} from 'react-router-dom';
import CreateUser from '@/components/pages/CreateUser.jsx'
import ViewUsers from '@/components/pages/ViewUsers.jsx'
import Header from '@/components/shared/Header.jsx'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<CreateUser/>} />
        <Route path="/users" element={<ViewUsers/>} />
      </Routes>
    </>
  )
}

export default App
