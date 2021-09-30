import React from 'react'
import "./topheader.scss"
import Button from '../button/button';

const TopHeader = (props) => {
  const {title} = props;
  return (
    <>
    <div className="topheader">
      <div className="container">
        <h2 className="topheader__header">{title}</h2>
        {props.children}
      </div>
    <div className="btn">
      <Button btnStyle="primary" text="+  Create"/>
    </div>
    </div>
  </>
  )
}

export default TopHeader;
