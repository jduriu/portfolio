"use client"
import { useState, useEffect} from 'react'

export default function Fade ({ inputs, delay}) {
    const fadeProps = {
        "fadeIn": "transition ease-in-out duration-300 opacity-0 -translate-x-20",
        "fadeOut": "transition ease-in-out duration-300 opacity-100"
    }

    const [fade, setFade] = useState('fadeIn')
    const [inputIdx, setInputIdx] = useState(0)
    const [text, setText] = useState(inputs[inputIdx])

    const getFadeProps = (fade) => {
        return fadeProps[fade]
    }


    useEffect(() => {
        const timeout = setInterval(() => {
            if (fade === 'fadeIn') {
               setFade('fadeOut')
               if (inputIdx === inputs.length - 1) {
                  setInputIdx(0)
               } else {
                  setInputIdx(inputIdx + 1)
               }
               setText(inputs[inputIdx])
            } else {
                 setFade('fadeIn')
            }
         }, delay);

        return () => clearInterval(timeout)
    }, [fade, delay, inputIdx, inputs]);

    return (
        <div className="text-7xl">
            <div className={getFadeProps(fade)}>{text}</div>
        </div>
    )
}
