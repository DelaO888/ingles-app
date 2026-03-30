import { prisma } from "@/app/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
    const {email, password} = await req.json()
    const hashed = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
        data: {email, password: hashed}
    })
    return Response.json({user})
}