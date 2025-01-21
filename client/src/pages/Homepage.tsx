import luffy_silhoutte from '../assets/images/luffy_silhoutte.svg'

export default function Homepage() {
  return (
    <main className="max-h-svh w-full grid gap-3">{/**grid-rows-[auto_1fr] to create a dynamic two-row layout */}
      <section className="flex justify-center">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold"> {/*Text automatically scales using clamp() function: minimum 2rem, preferred 5vw, maximum 4rem */}
          One Piece Fan Site
        </h1>
        <img
          src={luffy_silhoutte}
          alt="Luffy Silhouette"
          className="w-auto h-[66.67svh]"
        />
      </section>
      
      <section className="grid-flow-col grid gap-3">
        <button className="text-[clamp(1rem,2.5vw,2rem)] font-bold"> {/*Text automatically scales using clamp() function: minimum 1rem, preferred 2.5vw, maximum 2rem */}
          Characters
        </button>
        <button className="text-[clamp(1rem,2.5vw,2rem)] font-bold"> {/*Text automatically scales using clamp() function: minimum 1rem, preferred 2.5vw, maximum 2rem */}
          Crews
        </button>
        <button className="text-[clamp(1rem,2.5vw,2rem)] font-bold"> {/*Text automatically scales using clamp() function: minimum 1rem, preferred 2.5vw, maximum 2rem */}
          Devil Fruits
        </button>
      </section>
    </main>
  )
}
