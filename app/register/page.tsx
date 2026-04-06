'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

const handleRegister = async () => {

    if (password !== confirmPassword) {
    setError("Passwords don't match")
    return
  }

  setError("")

        
   const res = await fetch("/api/register", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({email,password})
   })

   if(res.ok){
    router.push("/login")
   } else {
    setError("Something went wrong")
   }
    

}

return(
    <div className="mx-auto flex flex-col w-80 gap-4 mt-20">
        <h1 className="text-2xl font-bold">Register</h1>
              <input className="bg-zinc-800 p-3 rounded-lg" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="bg-zinc-800 p-3 rounded-lg" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <input className="bg-zinc-800 p-3 rounded-lg" type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)} />
      <button className="bg-amber-700 p-3 rounded-2xl" onClick={handleRegister}>Register</button>
      {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
                 )}
    </div>
)

}