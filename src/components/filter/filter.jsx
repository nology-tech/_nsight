import React from 'react'
import "./filter.scss"

const Filter = (props) => {

    const { filterByConsumer, filterByConsultant, filterByEmployed } = props;
    
    return (
        <div>
            <label>Filter by Consumer</label>
            <input type="checkbox" value="" onChange={filterByConsumer}/>

            <label>Filter by Consultant</label>
            <input type="checkbox" value="" onChange={filterByConsultant}/>

            <label>Employed?</label>
            <input type="checkbox" value="" onChange={filterByEmployed}/>


            <input
	            checked={checkboxValue}
	            onChange={() => setCheckboxValue(!checkboxValue)}
	            type="checkbox"
            />
        </div>
    )
}

export default Filter
