'use client'

import { Menu, XCircle } from 'react-feather'
import { useState } from 'react'

export default function Hamburger({links}) {

    const [navOpen, setOpen] = useState(false)



    if (navOpen) {
        return (
            <div className="fixed top-3 right-3 w-3/4 h-4/5 bg-slate-500 justify-end rounded-lg">
                <div className="flex h-10 p-3 justify-end items-center text-black">
                    <XCircle
                    size={20}
                    onClick={() => setOpen(false)}
                    />
                </div>
                menu here
            </div>

        )
    } else {
        return (
            <div className="sm:hidden justify-between flex pr-5">
                <Menu
                size={20}
                onClick={() => setOpen(true)}
                />
            </div>
        )
    }
}
