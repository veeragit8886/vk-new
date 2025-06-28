import React from 'react'
import { useState } from 'react'
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleSearchToggle=()=>{
        setIsOpen(!isOpen)

    }

    const handleSearch=(e)=>{
        e.preventDefault()
        console.log("searched " - searchTerm)
        setIsOpen(false)
    }

    return (
      <>
    <div
    className={`flex items-center justify-center p-1 transition-all duration-300 ease-in-out z-[999] ${
      isOpen
      ? 'absolute top-0 left-0 w-full bg-white h-24 md:h-36 z-50'
      : 'w-auto'
    }`}
  >
    {isOpen ? (
      <form
      onSubmit={handleSearch}
      className="relative flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4"
      >
        {/* Input Field */}
        <div className="relative w-3/4 md:w-1/2">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-gray-100 px-4 py-2 pr-12 focus:outline-none placeholder:text-gray-700 border-2 border-gray-900 rounded-2xl w-full"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
            <HiMagnifyingGlass className="h-6 w-6" />
          </button>
        </div>
  
        {/* Close Button */}
        <button
          type="button"
          onClick={handleSearchToggle}
          className="text-gray-600 hover:text-gray-800"
        >
          <HiMiniXMark className="h-8 w-8" />
        </button>
      </form>
    ) : (
      <button
        onClick={handleSearchToggle}
        className="flex justify-center items-center h-8 w-8"
      >
        <HiMagnifyingGlass className="h-6 w-6" />
      </button>
    )}
  </div>
  </>
  
  )
}

export default SearchBar