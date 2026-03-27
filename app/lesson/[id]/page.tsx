import { prisma } from "../../lib/prisma"

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  console.log("id from params:", id)
  console.log("parsed id:", Number(id))


  const lesson = await prisma.lesson.findUnique({
    where: { id: Number(id) }
  })

  if (!lesson) return <p>Lesson not found</p>

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      <p>{lesson.duration}</p>
    </div>
  )
}