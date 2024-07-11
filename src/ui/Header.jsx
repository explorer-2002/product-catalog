import { Link } from "react-router-dom"
import Search from '../ui/Search'

export default function Header() {
  return (

    <header className="bg-yellow-400 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-[5px]">Jain Industries . CO</Link>
      <Search />
    </header>
  )
}
