import { ReactPropTypes } from "react";

export default function GlassPane(props) {
  let color = "bg-[#ffffff]/20";
  if (props.paneColor) {
    color = props.paneColor;
  }

  const defaultClasses = `border border-white/30 ${color} shadow-glass `;

  return (
    <div className={defaultClasses + props.className}>{props.children}</div>
  );
}
