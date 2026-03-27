import { prisma } from "../lib/prisma";
import type { Lesson } from "../lib/types/Lesson"

export default async function Lessons(){

const lessons: Lesson[] = await prisma.lesson.findMany();


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

        {lessons.map(lesson => (
            <div className="bg-zinc-900 rounded-2xl p-5 gap-2 mt-3 md:w-100 h-50 hover:border flex flex-col justify-between hover:border-amber-500" key={lesson.id}>
                <div className="flex justify-between">
                    <span>⏱️</span>
                    <div className="rounded-2xl bg-green-900 p-1 text-green-400">✅ Done</div>
                </div>
                <p>{lesson.title}</p>
                <p>{lesson.description}</p>
                <div className="flex justify-between">
                    <span>⏱ {lesson.duration}</span>
                    <div className="text-orange-400">Start - </div>
                </div>
            </div>
        ))}

        </div>
    )
}