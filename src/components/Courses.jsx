import React from 'react'
import { courses } from '../data'
import Course from './Course/Course'

export default function Courses () {
  const course = ({ name, instructor, certificate }) => (
    <Course name={name} instructor={instructor} certificate={certificate} />
  )
  return (
    <div className="section">
      <h2>Courses &amp; Certificates</h2>
      {courses.map(course)}
    </div>
  )
}
