'use client'
import ContactForm from '@/components/ContactForm'
import GlassPane from '@/components/Glass'
import { useState } from 'react'
import { iconGroups } from '@/components/icons'
import Link from 'next/link'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const links = iconGroups.Links

  return (
    <div className="h-full w-full">
      <div className="bg-sd bg-center bg-cover fixed top-0 w-full h-full" />
      <div className="fixed top-0 mt-[50px] w-full h-[calc(100%-50px)] p-5 flex items-center justify-center">
          <GlassPane className="lg:w-1/2 h-full rounded-3xl flex flex-col gap-5 justify-center p-10 backdrop-blur-xs" paneColor="bg-black/50">
            <div className="md:text-5xl text-3xl">Contact Me</div>
            <div className="h-full justify-self-start flex flex-col gap-5 overflow-hidden">
              <div>Reach out to me via social media</div>
              <div className="flex gap-5">
                {links.map((link) => (
                  <div className="px-3" key={link.name}>
                    <Link href={link.url} target="_blank" className="flex flex-col justify-center items-center gap-1" >
                        <div className="text-3xl sm:text-5xl hover:-translate-y-2 transition duration-300">
                          {<link.icon/>}
                        </div>
                        <div className="max-w-[100px] text-center">{link.name}</div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="w-full flex flex-col justify-center items-center overflow-y-scroll">
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
                  <div className="h-full w-full px-3">
                    <div className="self-start pb-5 -translate-x-3">Or fill out the form below to send me and email</div>
                    <ContactForm setSent={setSent}/>
                  </div>
                }
              </div>
            </div>
          </GlassPane>
      </div>
    </div>
  )

}
