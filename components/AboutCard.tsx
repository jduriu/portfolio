import GlassPane from "./Glass";

export default function AboutCard() {

  return (
    <GlassPane className="w-full lg:w-1/2 h-full rounded-3xl sm:p-10" paneColor="bg-black/50">
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full overflow-y-scroll">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 px-5 py-10">
            <h1 className="md:text-3xl lg:text-5xl">About Me</h1>
            <div className="animate-bounce">scroll to read more</div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:text-2xl text-center px-5 py-10">
            <h1 className="md:text-3xl lg:text-5xl pb-5">Hi I&apos;m Jon!</h1>
            <div>A Bay Area native, former San Diego resident, and enjoyer of good vibes.</div>
            <div>
              I&apos;ve always been a designer and engineer. There isn&apos;t a much better feeling than seeing
              something you&apos;ve visualized, sketched, and ultimately built come together.
            </div>
            <div>
              I&apos;m a firm believer in that the more effort you put into something the better the end result.
            </div>
            <div className="animate-bounce text-base pt-10">continue to find out more about my personal life</div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 sm:text-xl text-center px-5 py-10">
            <h1 className="md:text-3xl lg:text-5xl pb-5">Outside of work you can find me</h1>
            <div>Hanging with friends and family.</div>
            <div>Enjoying good drinks and food on an outdoor patio with live music.</div>
            <div>Watching a show or any Bay Area sports team.</div>
            <div>Staying active hiking the hills, golfing, or most recently disc golfing.</div>
            <div>Cooking family recipes or experimenting with new ones.</div>
          </div>
        </div>
      </div>
    </GlassPane>
  )
}
