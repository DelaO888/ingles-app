import Link from "next/link"

export default function Navbar(){
    return(
         <nav className="flex justify-between items-center px-10 mt-3">
          <Link href="/" >IMAGE WOULD GO HERE</Link>
          <ul className="flex gap-2 items-center">
            <Link className="text-sm md:text-lg" href="/lessons">Lessons</Link>
            <li className="text-sm md:text-lg">Progress</li>
            <button className="bg-amber-700 rounded-2xl p-3 text-sm md:text-lg">Start Learning</button>
          </ul>
      </nav>
    )
}