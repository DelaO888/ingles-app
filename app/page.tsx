import Image from "next/image";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { prisma } from "./lib/prisma";
import LessonCard from "./components/LessonCard";
import LessonCarousel from "./components/LessonCarousel";


export default async function Home() {


const lessons = await prisma.lesson.findMany();

  return (
    <main className="">
     


    {/* <div className="flex mt-10 w-5xl justify-between items-center px-40 bg-zinc-800 text-orange-600">
      <button className="rounded-2xl">Para hispanohablantes</button>
    </div> */}

       <button className="rounded-2xl ml-20 md:ml-40 mt-5 mb-7 bg-zinc-800 text-orange-600 p-2">Para hispanohablantes</button>

  
     <div className="flex flex-col items-center md:flex-row md:flex md:mt-10 md:justify-between md:items-center md:px-40">
        <div className="flex flex-col justify-center items-center md:block">
          <h1 className="text-3xl md:text-6xl w-[50%] text-center md:text-left">English that <span className="bold italic text-orange-600 text-3xl md:text-6xl">actually</span> makes sense to you </h1>
          <p className="w-[50%] mt-5 text-justify">Lessons built for Spanish speakers — no generic content, no confusion. We explain English through your language, not around it.</p>
          <div className="flex gap-3 mt-3">
            <button className="bg-amber-600 rounded-2xl p-3 hover:cursor-pointer">Browse Lessons</button>
            <button className="bg-black/55 border-2 border-white rounded-2xl p-3 hover:cursor-pointer">See how it works</button>
          </div>
        </div> 


       <Card cardTitle="Today's Lesson" cardBody="The many uses of 'get'"></Card>

    </div>


<LessonCarousel lessons={lessons}></LessonCarousel>

      {/* <div className="flex gap-3 mx-auto overflow-x-auto scroll-smooth snap-x snap-mandatory px-10 w-full">
        {lessons.map(lesson => (
          <div key={lesson.id} className="snap-start shrink-0 w-72">
             <LessonCard  cardBody={lesson.description} cardTitle={lesson.title}></LessonCard>
          </div>
        
        ))}
      </div> */}

    </main>
  );
}
