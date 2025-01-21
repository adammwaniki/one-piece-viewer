import { Navigate, NavLink } from "react-router";

export default function Navbar() {
  return (
    <section className="flex justify-between items-center p-3">
      <span className="flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/crew">Crews</NavLink>
        <NavLink to="/character">Characters</NavLink>
        <NavLink to="/devilfruit">Devilfruits</NavLink>
      </span>
      <search className=" placeholder:Search characters, crews, and more...  "> {/*Text automatically scales using clamp() function: minimum 1rem, preferred 2.5vw, maximum 2rem */}
          Search characters, crews, and more...
      </search>
    
    </section>
  )
}
