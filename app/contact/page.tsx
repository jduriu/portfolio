'use client'
import ContactForm from '@/components/ContactForm'
import GlassPane from '@/components/Glass'
import { useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

    return (
      <div className="h-full w-full">
        <div className="bg-sd bg-center bg-cover fixed top-0 w-full h-full" />
        <div className="fixed top-0 mt-[50px] w-full h-[calc(100%-50px)] p-10 flex items-center justify-center">
            <GlassPane className="md:w-1/2 h-full rounded-3xl flex flex-col gap-10 justify-center p-10 backdrop-blur-xs" paneColor="bg-black/50">
              <div className="justify-self-start flex flex-col gap-5 p-5">
                <div className="text-5xl">Contact Me</div>
                <div>Reach out to me via social media</div>
              </div>
              <div className="w-full flex flex-col justify-center items-center p-5">
                {sent ?
                  <div className="flex flex-col gap-5">
                    <div>
                      Thanks so much! I will respond as soon as I can
                    </div>
                    <button className="underline hover:scale-105 transition duration-300" onClick={() => setSent(false)}>
                      Send Another Message
                    </button>
                  </div>
                  :
                  <div className="w-full">
                    <div className="self-start py-5">Or fill out the form below to send me and email</div>
                    <ContactForm sent={sent} setSent={setSent}/>
                  </div>
                }
              </div>
            </GlassPane>
        </div>
      </div>
    )

}
