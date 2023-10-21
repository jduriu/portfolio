import Typewriter from "@/components/Typewriter";

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
    <div className="flex flex-col h-full justify-center items-center">
      <Typewriter inputTexts={typewriterTexts} delay={2000} />
    </div>
  )
}
