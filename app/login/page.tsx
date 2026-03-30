"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        await signIn("credentials", {email, password, callbackUrl: "/lessons"})
    }

    return(
        <div className="flex flex-col mx-auto mt-20 w-80 gap-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <input type="email" className="bg-zinc-800 p-3 rounded-lg" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="password" className="bg-zinc-800 p-3 rounded-lg" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                  <button className="bg-amber-700 p-3 rounded-2xl" onClick={handleLogin}>Login</button>
        </div>
    )

}