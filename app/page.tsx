import Fade from '@/components/Fade'
import GlassPane from '@/components/Glass'
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
    <div className="fixed mt-[50px] h-[calc(100%-50px)] w-full md:grid grid-cols-2 top-0 overflow-y-scroll">
      <div className="flex flex-col justify-center items-center px-10 py-10 md:h-full">
          <div className="md:text-7xl text-6xl">Jon Uriu</div>
          <div className="py-10">
            <Fade inputs={tagInputs} delay={2000}/>
          </div>
          <div className="md:p-10">
            <GlassPane
              className="flex flex-col p-3 rounded-xl backdrop-blur-sm"
              paneColor="bg-slate-400/20"
            >
              <div className="text-2xl">
                Welcome to my website!
              </div>
              <div className="py-2">
                Fun fact,
              </div>
              <div>
                The background images on this site are some of my favorite places to be! Let know
                if you recognize them or if you enjoy them too!
              </div>
            </GlassPane>
          </div>
      </div>
      <div className="flex flex-col justify-center items-center px-10 md:py-10 gap-10 md:h-full ">
        <Image
          src={SelfPortrait}
          width={500}
          height={700}
          alt="Jon Uriu Image"
          className="rounded-3xl w-[75%]"
        />
      </div>
    </div>
  </div>
)
}
