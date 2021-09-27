import React from 'react'
import "./topheader.scss"

const TopHeader = (props) => {
  const {title} = props;
  return (
    <div className="topheader">
      <div className="container">
        <h2 className="topheader__header">{title}</h2>
        {props.children}
      </div>
    </div>
  )
}

export default TopHeader;
