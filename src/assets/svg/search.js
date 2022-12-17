import * as React from "react"

const SearchSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={11} cy={11} r={7} stroke="#000" strokeWidth={2} />
    <path d="m20 20-3-3" stroke="#000" strokeWidth={2} strokeLinecap="round" />
  </svg>
)

export default SearchSvg
