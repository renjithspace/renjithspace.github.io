import React from 'react'
import Label from '../Label/Label'
import styles from './Project.module.css'

export default function Project ({ name, brief, tools }) {
  const tool = (tool) => (
    <Label text={tool} color="green" />
  )
  return (
    <div className="subsection">
      <h3>{name}</h3>
      <p className={styles.brief}>{brief}</p>
      <div className={styles.tools}>
        {tools.map(tool)}
      </div>
    </div>
  )
}
