import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = 'bg-yellow-400 uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors transition-500 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed  px-4 py-2 md:px-5 md:py-2.5 text-xs'

  if (to === "-1")
    return <button onClick={() => navigate(-1)} className={className}>{children}</button>

  return (

    <Link to={to}>
      <button className={className}>
        {children}
      </button>
    </Link>

  )

}
