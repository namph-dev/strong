import * as React from "react"
const RightArrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={5}
    height={10}
    fill="none"
    {...props}
  >
    <path
      stroke="#111827"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.5}
      d="m.455 8.96 3.26-3.26a.993.993 0 0 0 0-1.4L.455 1.04"
    />
  </svg>
)
export default RightArrow
