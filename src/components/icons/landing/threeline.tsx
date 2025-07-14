import * as React from "react";
interface SVGComponentProps extends React.SVGProps<SVGSVGElement> { }
const SVGComponent: React.FC<SVGComponentProps> = (props) => (
    <svg
        width={72}
        height={96}
        viewBox="0 0 72 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M67.1191 2L70.5791 44.84"
            stroke="#1F2D44"
            strokeWidth={2.46}
            strokeLinecap="round"
        />
        <path
            d="M7.91406 32.6611L51.0825 59.6286"
            stroke="#1F2D44"
            strokeWidth={2.46}
            strokeLinecap="round"
        />
        <path
            d="M1.83789 94L42.7709 81"
            stroke="#1F2D44"
            strokeWidth={2.46}
            strokeLinecap="round"
        />
    </svg>
);
export default SVGComponent;
