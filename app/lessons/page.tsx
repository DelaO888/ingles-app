import {prisma} from "@/lib/prisma";


export default async function Lessons(){

const lessons = await prisma.lesson.findMany();


    return(
        <div>

            <div>
                <h1 className="font-extrabold text-3xl md:text-6xl">All Lessons</h1>
                <p> {lessons.length} Lessons Available</p>
            </div>

            <div>
                <div className="flex gap-2">
                    <span>Level</span>
                    <button className="text-white border border-white rounded-2xl py-1 px-4">All</button>
                    <button>Beginner</button>
                    <button>Intermediate</button>
                    <button>Advanced</button>
                </div>
                <div className="flex gap-2">
                    <span>Category</span>
                    <button>All</button>
                    <button>Beginner</button>
                    <button>Intermediate</button>
                    <button>Advanced</button>
                </div>
            </div>

        

        </div>
    )
}