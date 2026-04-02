"use client"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

const [open, setOpen] = useState(false);

    return(
         <nav className="flex justify-between items-center px-10 mt-3 relative">
          <Link href="/" >IMAGE WOULD GO HERE</Link>

        {/* hamburger button - only visible below md */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? "X" : "☰"}
        </button>

          <ul className="hidden md:flex gap-2 items-center">
            <Link className="text-sm md:text-lg" href="/lessons">Lessons</Link>
            <li className="text-sm md:text-lg">Progress</li>
             <Link href="/login" className="bg-amber-700 rounded-2xl p-3">Log In & Start Learning</Link>
          </ul>

        {open && (
            <ul className="md:hidden absolute top-12 right-0 bg-zinc-900 flex flex-col gap-4 p-6 rounded-xl z-50">
                <Link href="/lessons" onClick={() => setOpen(false)}>Lessons</Link>
          <li>Progress</li>
          <Link href="/login" className="bg-amber-700 rounded-2xl p-3">Log In & Start Learning</Link>
            </ul>
        )}

      </nav>
    )
}