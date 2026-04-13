"use client"
import { signIn } from "next-auth/react"
import { useState } from "react"
import Link from "next/link"

export default function LoginPage(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const handleLogin = async () => {
        await signIn("credentials", {email, password, callbackUrl: "/lessons"})
    }

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return(
        <div className="flex flex-col mx-auto mt-20 w-80 gap-4">
                <h1 className="text-2xl font-bold">Login</h1>
                <input type="email" className="bg-zinc-800 p-3 rounded-lg" placeholder="Email" onChange={e => setEmail(e.target.value)} />
             <div className="block"><input type={showPassword ? "text" : "password"} className="bg-zinc-800 p-3 rounded-lg" placeholder="Password" onChange={e => setPassword(e.target.value)} /> <button onClick={handleShowPassword}>{showPassword ? "🙉"  : "🙈"}</button> </div>   
                  <button className="bg-amber-700 p-3 rounded-2xl" onClick={handleLogin}>Login</button>
                  <Link href="/register" className="bg-amber-700 p-3 rounded-2xl" >OR Register</Link>
        </div>
    )

}