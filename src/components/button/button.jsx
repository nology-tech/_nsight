import React from 'react'
import "./button.scss"

const Button = ({text,isSecondary}) => {

    let buttonStyle = "button1"

    if (isSecondary) {
        buttonStyle += " button-secondary";
      } else {
        buttonStyle += " button-primary";
      }


    return (
        <button className={buttonStyle}>{text}</button>
    )
}

export default Button
