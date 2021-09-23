import React from 'react'
import "./filter.scss"

const Filter = (props) => {

    const { filterByConsumer, filterByConsultant, filterByEmployed } = props;
    
    return (
        <div>
            <label>Filter by Consumer</label>
            <input type="checkbox" onChange={filterByConsumer} />

            <label>Filter by Consultant</label>
            <input type="checkbox" onChange={filterByConsultant} />

            <label>Employed</label>
            <input id="employed" type="checkbox" onChange={filterByEmployed} />
        </div>
    )
}

export default Filter
