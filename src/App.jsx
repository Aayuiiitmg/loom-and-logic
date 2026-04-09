import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home setPage={setCurrentPage} />
      case 'about': return <About setPage={setCurrentPage} />
      case 'contact': return <Contact />
      default: return <Home setPage={setCurrentPage} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setPage={setCurrentPage} currentPage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setPage={setCurrentPage} />
    </div>
  )
}

export default App
