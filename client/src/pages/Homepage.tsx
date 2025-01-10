import luffy_silhoutte from '../assets/images/luffy_silhoutte.svg'

export default function Homepage() {
  return (
    <main className="max-h-svh w-full grid grid-rows-[auto_1fr] gap-3">{/**grid-rows-[auto_1fr] to create a dynamic two-row layout */}
      <section className="flex justify-center">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold"> {/*Text automatically scales using clamp() function: minimum 2rem, preferred 5vw, maximum 4rem */}
          One Piece
        </h1>
      </section>
      
      <section className="flex items-center justify-center">
        <img
          src={luffy_silhoutte}
          alt="Luffy Silhouette"
          className="w-auto h-[66.67svh]"
        />
      </section>
    </main>
  )
}
