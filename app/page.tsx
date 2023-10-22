import Typewriter from '@/components/Typewriter'
import SelfPortrait from '@/images/SelfPortrait.jpeg'
import Image from 'next/image'

export default function HomePage() {

  const typewriterInputs = [
    "Creator",
    "Developer",
    "Engineer",
  ]

  return (
    <div className="bg-forestbw bg-center bg-cover bg-scroll flex h-full w-full justify-center gap-[15%] items-center flex-wrap">
      <div className="flex flex-col h-full w-50 justify-center items-center">
        <div className="flex flex-col items-start px-10">
          <h1 className="text-7xl">Jon Uriu</h1>
          <div className="text-5xl py-5">
            Engineer
            <Typewriter inputs={typewriterInputs} delay={500}/>
          </div>
          <div className="pt-10 text-xl">
            Have a question about me? Ask my AI. It will try its best!
          </div>
          <div className="flex gap-10 pt-5">
            <input
              type="text"
              className="px-4 py-3 border border-slate-500 rounded-full bg-black"
              placeholder="ask me a question"
            />
            <button
              className="bg-transparent hover:bg-blue-500
              text-blue-700 font-semibold
              hover:text-white py-2 px-4 border
              border-blue-500 hover:border-transparent
              rounded"
              type="submit"
            >
              ask
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-50 justify-center items-center px-10 py-10">
        <Image
          src={SelfPortrait}
          width={500}
          height={800}
          alt="Jon Uriu Image"
          className="rounded-xl"
        />
      </div>
    </div>
  )
}
