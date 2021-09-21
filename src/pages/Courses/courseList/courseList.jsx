import React from 'react'
import "./courseList.scss"

const courseList = (props) => {
  const {course} = props
  return (
    <div className="courselist">
      <p>{course.name}</p>
    </div>
  )
}

export default courseList
