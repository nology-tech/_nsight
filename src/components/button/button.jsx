import React from 'react'
import "./button.scss"

const Button = ({text , btnStyle}) => {

    let buttonStyle = "button1"

    if (btnStyle === "secondary") {
        buttonStyle += " button-secondary";
      } else if (btnStyle === "primary") {
        buttonStyle += " button-primary";
      } else if (btnStyle === "tertiary") {
        buttonStyle += " button-tertiary";
      } else if (btnStyle === "fourth") {
        buttonStyle += " button-fourth";
      }

    return (
        <button className={buttonStyle}>{text}</button>
    )
}

export default Button