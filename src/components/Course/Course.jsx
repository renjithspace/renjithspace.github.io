import React from 'react'
import Label from '../Label/Label'
import styles from './Course.module.css'

export default function Course ({ name, instructor, certificate }) {
  return (
    <div className="subsection">
      <h3>{name}</h3>
      <p className={styles.instructor}>{instructor}</p>
      <Label text="View certificate" color="blue" url={certificate} />
    </div>
  )
}
