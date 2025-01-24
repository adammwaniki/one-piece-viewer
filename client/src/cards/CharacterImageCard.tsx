import { useState } from 'react'
import CharacterDetailsCard from "./CharacterDetailsCard"

export default function CharacterImageCard() {
  const [showDetails, setShowDetails] = useState(false)

  if (showDetails) {
    return <CharacterDetailsCard />
  }
  
  return (
    <div className="max-w-xs mx-auto p-1.5 shadow-2xl bg-[#efebe0] border rounded-md ">
      <div className="border-4 border-black p-6">
        <h2 className="text-2xl font-bold text-left">Character Name</h2>
        <h3 className="text-left ">Character Bounty </h3>
        <h4 className="text-right text-sm">Character Status</h4>
        <img src="https://picsum.photos/id/64/300/200" alt="dummyPic" className="saturate-[.30] backdrop-blur-xs backdrop-grayscale "/>
        <button 
          className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4" 
          onClick={() => setShowDetails(true)}
        >
          View Details
        </button>
      </div>
    </div>
  )
}
