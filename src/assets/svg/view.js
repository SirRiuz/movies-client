import * as React from "react"

const ViewSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5c-5.444 0-8.469 4.234-9.544 6.116-.221.386-.331.58-.32.868.013.288.143.476.402.852C3.818 14.693 7.294 19 12 19c4.706 0 8.182-4.306 9.462-6.164.26-.376.39-.564.401-.852.012-.288-.098-.482-.319-.868C20.47 9.234 17.444 5 12 5Z"
      stroke="#fff"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={4} fill="#fff" />
  </svg>
)

export default ViewSvg
