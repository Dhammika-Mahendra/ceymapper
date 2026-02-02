import { useState } from 'react'

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={toggleDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          {/* Add your menu items here */}
          <nav className="space-y-4">
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Map View
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              Settings
            </a>
            <a href="#" className="block text-gray-700 hover:text-blue-600">
              About
            </a>
          </nav>
        </div>
      </div>

      {/* Toggle Button - Arrow Icon */}
      {!isOpen && (
        <button
          onClick={toggleDrawer}
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-white text-gray-700 p-1 px-0.5 rounded-r-md shadow-lg z-30 hover:bg-gray-100 transition-colors"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default Drawer
