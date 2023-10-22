import SelfPortrait from '@/images/SelfPortrait.jpeg'
import Image from 'next/image'

export default function HomePage() {

  const typewriterTexts = [
    "Hello...",
    "Welcome to my site!",
    "My name is Jon Uriu",
    "I'm a Designer",
    "I'm a Developer",
    "I'm an Engineer",
    "Jon Uriu",
  ]

  return (
    <div className="flex h-full w-full justify-center gap-10 items-center flex-wrap">
      <div className="flex flex-col h-full w-50 justify-center items-center">
        <div className="flex flex-col items-start px-10">
          <h1 className="text-6xl">Jon Uriu</h1>
          <div className="text-3xl">I'm an engineer, designer, creator</div>
          <div className="pt-10">
            Bot?
          </div>
        </div>
      </div>
      <div className="flex flex-col w-50 justify-center items-center px-10">
        <Image
          src={SelfPortrait}
          width={500}
          height={800}
          alt="Jon Uriu Image"
          className="rounded-xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}
