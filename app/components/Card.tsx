type CardProps = {
  cardTitle: string;
  cardBody: string;
}

export default function Card({cardTitle, cardBody} : CardProps){
    return(
         <div className="bg-zinc-900 p-5 gap-2 w-100 h-50 flex justify-center items-center">
          
         <span className="text-2xl">🎯</span>

          <div className="flex flex-col">
          <p className="font-extralight text-sm">{cardTitle}</p>
          <p className="font-bold">{cardBody}</p>
          </div>
          
          
        </div>
    
    )
}