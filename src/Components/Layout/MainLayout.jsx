import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const MainLayout = ({children}) => {
  return (
    <div className='flex min-h-screen'> 
    <Sidebar />
    <main className='flex-1 bg-gray-50'>
        <Header />
        {/* Dashboard */}
        {children}
    </main>

    </div>
  )
}

export default MainLayout