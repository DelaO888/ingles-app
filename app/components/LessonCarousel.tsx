'use client'

import { useState } from "react";
import LessonCard from "./LessonCard";


export default function LessonCarousel({lessons}){

    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent(i => Math.max(i - 1,0))
    const next = () => setCurrent(i => Math.min(i + 1,lessons.length - 1))

    return(
        <div className="flex items-center gap-4 mx-auto px-10 w-full">
            <button onClick={prev} className="text-2xl disabled:opacity-30" disabled={current === 0}></button>
            <div className="overflow-hidden w-full">
                <div className="flex transition-transform duration-300" style={{transform: `translateX(-${current*100}%)`}}>
                    {lessons.map(lesson => (
                        <div key={lesson.id} className="shrink-0 w-full">
                              <LessonCard cardBody={lesson.description} cardTitle={lesson.title} />
                        </div>
                    ))}
                </div>
            </div>
             <button onClick={next} className="text-2xl disabled:opacity-30" disabled={current === lessons.length - 1}>→</button>
        </div>
    )

}  