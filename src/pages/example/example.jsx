import React from 'react'

// 1. See how all the file and folder names are using lowercase. This will stop any case-senstivity issues between mac and windows. Trust us :)
//    However the component names are all PascalCase. ie. They start with a capital letter.

// 1. Import the stylesheet. Use bootstrap classnames for most things (e.g. responsiveness).
//    For any unique styling use BEM.
import "./example.scss";

const Example = () => {

    const handleClick = () => {
        console.log("Look at how this naming convention keeps things tidy. ie. Prefix event handlers with 'handle'")
    }

    // 2. See below the use of both BEM for custom classnames and bootstrap for responsive grid system
    //    see: https://getbootstrap.com/docs/5.0/layout/grid
    //    see: https://getbootstrap.com/docs/5.0/components/buttons
    return (
        <main class="example container">
            <div class="col text-center">
                <h1 class="example__title fw-bolder">Example Component structure</h1>
                <p class="example__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <button class="btn btn-primary" onClick={handleClick}>Click Me</button>
            </div>
        </main>
    )
}

// 3. Finally! Keep your components small. SRP/Do-One-Thing/etc :) Discuss questions/thoughts/ideas with your coach
export default Example;
