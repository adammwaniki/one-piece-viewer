
export default function CharacterDetailsCard() {
  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto p-4 border rounded-lg shadow-lg">
      <div className="text-center">
        <img src="" alt="" className=""></img>
        <h2 className="text-xl font-semibold mb-4">Character Name</h2>
        <h3 className="">Character </h3>
        <p className="text-gray-700">
          This card adjusts its size based on the screen width. Tailwind's responsive
          classes are used to change the max width at different breakpoints.
        </p>
      </div>
    </div>
  )
}
