import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="133" cy="127" r="109" /> 
    <rect x="6" y="379" rx="20" ry="20" width="110" height="34" /> 
    <rect x="145" y="376" rx="25" ry="25" width="121" height="48" /> 
    <rect x="0" y="252" rx="25" ry="25" width="280" height="27" /> 
    <rect x="0" y="295" rx="25" ry="25" width="280" height="67" />
  </ContentLoader>
)
export default Skeleton;