import React from 'react'

const Arrow = ({to}) => {
  return (
    <a href={`#${to}`}>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/disney-plus-hotstar-clon-13914.appspot.com/o/Portfolio%2Farrow.png?alt=media&token=c4ecf8fc-09f9-4070-a4f4-2eaca2a27637&_gl=1*bs2rlw*_ga*MTc3Nzc2MTU2OS4xNjk3MDQxNjg5*_ga_CW55HF8NVT*MTY5OTEyMDI3OC4xMy4xLjE2OTkxMjA1NDQuNTEuMC4w"
        alt="Arrow icon"
        className="icon arrow"
      />
    </a>
  )
}

export default Arrow