import * as React from "react"
const VietNamFlag = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={20}
    fill="none"
    {...props}
  >
    <rect width={28} height={20} y={0.002} fill="#F93939" rx={3} />
    <path
      fill="#FFDA2C"
      fillRule="evenodd"
      d="m14.003 12.443-2.787 1.466.533-3.102L9.496 8.61l3.115-.454 1.392-2.821 1.393 2.821 3.113.454-2.253 2.196.533 3.1"
      clipRule="evenodd"
    />
  </svg>
)

export default VietNamFlag;