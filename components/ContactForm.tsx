'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm({sent, setSent}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const errorMessages = {
    name: "Please fill in a name"
  }

  const sendEmail = async (e) => {
    e.preventDefault()
    const serviceId = process.env.NEXT_PUBLIC_EM_SERVICE
    const templateId = process.env.NEXT_PUBLIC_EM_TEMPLATE
    const publicKey = process.env.NEXT_PUBLIC_EM_KEY
    try {
      setError(false)
      setSending(true)
      if (name && email && message) {
        await emailjs.send(serviceId, templateId,
          {from_email: email, from_name: name, message: message},
          publicKey
          )
        setSending(false)
        setEmail("")
        setName("")
        setMessage("")
        setSent(true)
      } else {
        throw new Error()
      }
    } catch (error) {
      setError(true)
      setSending(false)
    }

  }

  return (
    <form className="w-full flex flex-col gap-3">
      <label>Name*</label>
      <input className="rounded text-black p-2" type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email*</label>
      <input className="rounded text-black p-2" type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message*</label>
      <textarea className="rounded text-black p-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>* indicates required fields</div>
      <button className="px-3 py-2 border border-white/50 rounded-xl hover:bg-slate-500/50 duration-300" onClick={sendEmail}>
        {sending ?
          "Loading" :
          "Send"
        }
      </button>
      {error &&
      <div className="text-red-700">
        {errorMessage}
      </div>
      }
  </form>
  )
}
