import Image from "next/image";

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
     <div className="flex mt-10 justify-between items-center px-20">
        <div>
          <h1 className="text-6xl">English that <span className="bold italic text-orange-600 text-2xl">actually</span> makes sense to you </h1>
          <p>Lessons built for Spanish speakers — no generic content, no confusion. We explain English through your language, not around it.</p>
        </div>


        <div className="border-amber-50 border-solid">
          card
        </div>
    

    </div>
    </main>
  );
}
