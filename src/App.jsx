import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  const [openSidebarToogle, setOpenSidebarToogle] = useState(false)

  const OpenSideBar = () => {
    setOpenSidebarToogle(!openSidebarToogle)
  }

  return (
   <div className='grid-container'>
      <Header OpenSidebar={OpenSideBar}/>
      <Sidebar openSidebarToogle={openSidebarToogle} OpenSidebar={OpenSideBar} />
      <Home />
   </div>
  )
}

export default App