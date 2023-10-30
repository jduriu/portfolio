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
  <div className="w-full h-full">
    <div className="bg-forestbw bg-center bg-cover h-full w-full"/>
    <div className="h-[calc(100%-50px)] w-full md:grid grid-cols-2 fixed top-0 overflow-y-scroll">
      <div className="flex flex-col justify-center items-center px-10 py-10 mt-[50px]">
          <div className="md:text-7xl text-6xl">Jon Uriu</div>
          <div className="py-10">
            <Fade inputs={tagInputs} delay={3000}/>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center px-10 md:py-10 md:mt-[50px] ">
        <Image
          src={SelfPortrait}
          width={500}
          height={700}
          alt="Jon Uriu Image"
          className="rounded-xl w-[75%]"
        />
      </div>
    </div>
  </div>
)
}
