import React from 'react'
import './formfield.scss'

const FormField = (props) => {

    const {label, type, value} = props;
    
    const inputs = () => {
        if(type == "select") {
            return (
                <> 
                    <select>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                </>
            )
        }
        else {
            return (
                <>
                    <input type={type} value={value}/>
                </>
            )
        }
    }
    return (
        <div>
            <label>{label}</label><br/>
            {inputs()}
        </div>
    )
}

export default FormField
