import React from 'react'
import "./button.scss"

const Button = ({text , isSecondary, isBorder}) => {

    //primary -> purple save button
    //primary-border -> white (purple font and border) button
    //secondary-> red with white text Delete User Confirm button
    //secondary-border-> //white with red border Delete User Cancel button
    
    //*** Width to be assigned within its container.!

    let buttonStyle = "button"

    if (!isSecondary && !isBorder) {
        buttonStyle += " primary";
      } else if (isSecondary && !isBorder) {
        buttonStyle += " secondary";
      } else if (!isSecondary && isBorder) {
        buttonStyle += " primary-border";
      } else if (isSecondary && isBorder) {
        buttonStyle += " secondary-border"
      } 


    return (
        <button className={buttonStyle}>{text}</button>
    )
}

export default Button
