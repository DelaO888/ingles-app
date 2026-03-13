import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="">
      <nav className="flex justify-between items-center px-10 mt-3">
          <p>IMAGE WOULD GO HERE</p>
          <ul className="flex gap-2 items-center">
            <li>Lessons</li>
            <li>Progress</li>
            <button className="bg-amber-700 rounded-2xl p-3">Start Learning</button>
          </ul>
      </nav>

    {/* <div className="flex mt-10 w-5xl justify-between items-center px-40 bg-zinc-800 text-orange-600">
      <button className="rounded-2xl">Para hispanohablantes</button>
    </div> */}

       <button className="rounded-2xl ml-20 md:ml-40 mt-5 bg-zinc-800 text-orange-600 p-2">Para hispanohablantes</button>

  
     <div className="flex mt-10 justify-between items-center px-40">
        <div>
          <h1 className="text-6xl w-[50%]">English that <span className="bold italic text-orange-600 text-6xl">actually</span> makes sense to you </h1>
          <p className="w-[50%] mt-5 text-justify">Lessons built for Spanish speakers — no generic content, no confusion. We explain English through your language, not around it.</p>
          <div className="flex gap-3 mt-3">
            <button className="bg-amber-600 rounded-2xl p-3 hover:cursor-pointer">Browse Lessons</button>
            <button className="bg-black/55 border-2 border-white rounded-2xl p-3 hover:cursor-pointer">See how it works</button>
          </div>
        </div> 


       <Card cardTitle="Today's Lesson" cardBody="The many uses of 'get'"></Card>

    </div>
    </main>
  );
}
