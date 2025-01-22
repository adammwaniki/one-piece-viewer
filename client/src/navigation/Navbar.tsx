import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { NavLink, useLocation } from 'react-router'
import { useState } from 'react'
import SearchBar from '../search/SearchBar'
import onePieceLogo from '../assets/images/one_piece_logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  return (
    <nav className="flex justify-between items-center p-3">
      <div className="flex items-center">
        <NavLink to="/">
          <img 
            src={onePieceLogo} 
            alt="One Piece Logo" 
            className="h-12 w-auto"
          />
        </NavLink>
      </div>

      {isHomePage ? (
        <SearchBar onSearch={(query) => {
          console.log('Searching:', query)
        }} />
      ) : (
        <>
          <div className="flex-1 flex justify-center">
            <SearchBar onSearch={(query) => {
              console.log('Searching:', query)
            }} />
          </div>

          <div className="flex flex-col">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faBarsStaggered : faBars} />
            </button>
            
            {isMenuOpen && (
              <div className="flex flex-col bg-white shadow-lg rounded-md py-2 mt-2">
                <NavLink to="/" className="px-4 py-2 hover:bg-gray-100">Home</NavLink>
                <NavLink to="/crew" className="px-4 py-2 hover:bg-gray-100">Crews</NavLink>
                <NavLink to="/character" className="px-4 py-2 hover:bg-gray-100">Characters</NavLink>
                <NavLink to="/devilfruit" className="px-4 py-2 hover:bg-gray-100">Devilfruits</NavLink>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  )
}
