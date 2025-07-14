import * as React from "react"
const DownArrow = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#1F2C43"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m16.6 7.46-5.433 5.434a1.655 1.655 0 0 1-2.333 0L3.4 7.461"
    />
  </svg>
)

export default DownArrow;