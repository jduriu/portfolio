import AboutCard from "@/components/AboutCard"

export default function AboutPage() {
  return (
    <div className="h-full w-full">
      <div className="bg-sf bg-center bg-cover fixed top-0 w-full h-full" />
      <div className="w-full h-[calc(100%-50px)] p-10 fixed top-0 mt-[50px]">
        <AboutCard/>
      </div>
    </div>
  )
}
