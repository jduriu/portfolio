import { ReactPropTypes } from "react"

export default function GlassPane(props) {

    const defaultClasses = "border border-white/60 bg-[#ffffff]/20 shadow-glass "

    return (
        <div className={defaultClasses + props.className}>
            {props.children}
        </div>
    )
}
