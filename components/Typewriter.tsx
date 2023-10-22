"use client"
import { useState, useEffect} from 'react'

export default function Typewriter({ inputs, delay}) {
    const [text, setText] = useState('');
    const [curSentenceIdx, setCurrentListIndex] = useState(0);
    const [curListIdx, setCurrentSentenceIndex] = useState(0);

    const type = () => {
        // type word
    }

    const backspace = () => {
        // delete word
    }

    useEffect(() => {
        type() // On load, run the typewriter
    }, []);

    return (
        <div className="text-3xl">
            <div>{text}</div>
        </div>
    )
}
