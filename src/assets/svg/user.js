import * as React from "react"

const UserSvg = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.651 20.405c.553-.115.883-.693.608-1.187-.606-1.087-1.56-2.043-2.78-2.771C15.907 15.508 13.98 15 12 15c-1.981 0-3.907.508-5.479 1.447-1.22.728-2.174 1.684-2.78 2.771-.275.494.055 1.072.607 1.187a37.503 37.503 0 0 0 15.303 0Z"
      fill="#000"
    />
    <circle cx={12} cy={8} r={5} fill="#000" />
  </svg>
)

export default UserSvg
