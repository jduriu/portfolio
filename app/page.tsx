import AIBot from '@/components/AIBot'
import Fade from '@/components/Fade'
import SelfPortrait from '@/images/SelfPortrait.jpeg'
import Image from 'next/image'

export default function HomePage() {

  const tagInputs = [
    "Creator",
    "Developer",
    "Engineer",
  ]

  return (
    <div
    className="bg-forestbw bg-center bg-cover bg-scroll
    flex-col sm:flex items-center justify-center flex-wrap
    h-full w-full overflow-scroll"
    >
      <div className="flex sm:w-1/2 flex-col justify-center items-center px-10 py-10">
          <div className="md:text-7xl text-6xl">Jon Uriu</div>
          <div className="py-10">
            <Fade inputs={tagInputs} delay={3000}/>
          </div>
          {/* <AIot/> */}
      </div>
      <div className="flex sm:w-1/2 flex-col justify-center items-center px-10 py-10">
        <Image
          src={SelfPortrait}
          width={500}
          height={700}
          alt="Jon Uriu Image"
          className="rounded-xl"
          sizes="(min-width: 250px)"
        />
      </div>
    </div>
  )
}
