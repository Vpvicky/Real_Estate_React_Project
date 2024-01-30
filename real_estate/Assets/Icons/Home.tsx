import React from 'react'

type HomeIconProps = {
 width?: number,
 height?: number,
 color?: string,
}

const HomeIcon = ({width,height,color}: HomeIconProps) => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" width={ "24" || width } height={"24" || height} viewBox="0 0 27 24" fill="none">
  <path d="M21.9375 7.64679V0.857143H17.7188V3.98839L13.5 0L0 12.8571H3.375V24H10.9688V15.4286H16.0312V24H23.625V12.8571H27L21.9375 7.64679Z" fill={"#B16642" || color}/>
</svg>
    </>
  )
}

export default HomeIcon