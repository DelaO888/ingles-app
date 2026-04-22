'use client'

import { useState } from "react";
import LessonCard from "./LessonCard";

const CARDS_PER_PAGE = 3;

export default function LessonCarousel({lessons}){

    const [current, setCurrent] = useState(0);

    const totalPages = Math.ceil(lessons.length / CARDS_PER_PAGE);

    const prev = () => setCurrent(i => Math.max(i - 1,0))
    const next = () => setCurrent(i => Math.min(i + 1,lessons.length - 1))

    const visible = lessons.slice(current * CARDS_PER_PAGE, current * CARDS_PER_PAGE + CARDS_PER_PAGE)

    return(
       <div className="flex items-center gap-4 mx-auto px-10 w-full">
      <button onClick={prev} className="text-2xl disabled:opacity-20" disabled={current === 0}>←</button>

      <div className="flex gap-3 w-full">
        {visible.map(lesson => (
          <div key={lesson.id} className="w-1/3">
            <LessonCard cardBody={lesson.description} cardTitle={lesson.title} />
          </div>
        ))}
      </div>

      <button onClick={next} className="text-2xl disabled:opacity-20" disabled={current === totalPages - 1}>→</button>
    </div>
    )

}  