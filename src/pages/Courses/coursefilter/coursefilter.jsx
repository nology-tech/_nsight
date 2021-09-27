import React from 'react'
import "./coursefilter.scss"

const CourseFilter = () => {
  return (
    <div className="coursefilter">
    <nav className="coursefilter__nav">
      <ul className="coursefilter__nav-list">
        <li href="" className="coursefilter__nav-list-tag">All</li>
        <li href="" className="coursefilter__nav-list-tag">Full-time</li>
        <li href="" className="coursefilter__nav-list-tag">Self-Paced</li>
        <li href="" className="coursefilter__nav-list-tag">Corporate</li>
      </ul>
    </nav>
    </div>
  )
}

export default CourseFilter;