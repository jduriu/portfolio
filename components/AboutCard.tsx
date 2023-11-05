import GlassPane from "./Glass";

export default function AboutCard() {
  // Pan in "About Me"
  //  Pan in "Small blurb about me"
  //  Pan out both
  //  Pan in My Timeline

  return (
    <GlassPane className="w-full h-full rounded-3xl p-10" paneColor="bg-black/50">
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full overflow-y-scroll">
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-5">
            <h1 className="text-5xl">About Me</h1>
            <div className="animate-bounce">scroll to read more</div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-2xl text-center p-5">
            <div className="text-5xl self-start translate-x-20 pb-10">My name is Jon Uriu</div>
            <div>A Bay Area native, former San Diego resident, and enjoyer of good vibes.</div>
            <div>
              I've always been a designer and engineer. There isn't a much better feeling than seeing
              something you've visualized, sketched, and ultimately built come together.
            </div>
            <div>
              I'm a firm believer in that the more effort you put into something the better the end result.
            </div>
            <div className="animate-bounce text-base pt-10">continue to find out more about my personal life</div>
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-2xl text-center p-5">
            <div className="text-5xl self-start translate-x-20 pb-5">Outside of work you can find me</div>
            <div>Hanging with friends and family.</div>
            <div>Enjoying good drinks and food on an outdoor patio with live music.</div>
            <div>Watching a show or any Bay Area sports team.</div>
            <div>Staying active hiking the hills, golfing, or most recently disc golfing.</div>
            <div>Cooking family recipes or experimenting with new ones.</div>
            {/* <div className="animate-bounce text-base pt-10">continue to see my professional timeline</div> */}
          </div>
          {/* <div className="w-full h-full flex flex-col items-center justify-center gap-10 text-2xl text-center p-5">
            TIMELINE GOES HERE
          </div> */}
        </div>
      </div>
    </GlassPane>
  )
}
