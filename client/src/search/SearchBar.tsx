import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="relative w-full sm:max-w-md lg:max-w-md mx-auto">
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
        <input
          type="text"
          className="w-full ml-3 outline-none bg-transparent text-gray-700 placeholder-gray-400"
          placeholder={window.innerWidth >= 1024 ? "Search characters, crews, and more..." : "Search"}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            onSearch(e.target.value);
          }}
        />
        <FontAwesomeIcon 
          icon={faMagnifyingGlass} 
          className="text-gray-500"
        />
      </div>
    </div>
  )
}
