import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="bg-white border-b border-gray-200 mb-4">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-8">
        <div className="text-blue-500 font-bold flex items-center">
          <span className="text-xl">RH</span>
          <span className="text-sm rotate-90 -mr-1">❯</span>
          <span className="text-gray-500 text-sm">Services</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700">Home</a>
          <a href="#" className="text-gray-700 flex items-center">Products <span className="ml-1">▼</span></a>
          <a onClick={()=> navigate('/start-application')} className="text-gray-700 flex items-center">Cases <span className="ml-1">▼</span></a>
        </nav>
        <Button onClick={()=> navigate('/start-application')}  className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md cursor-pointer">Apply</Button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center ml-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-600">👤</span>
          </div>
          <div className="ml-2 hidden md:block">
            <div className="text-sm font-medium">Thandiwe</div>
            <div className="text-xs text-gray-500">thandiwe.nkosi@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header