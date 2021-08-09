import React from 'react'
import Label from '../Label/Label'
import styles from './Book.module.css'

export default function Book ({ title, authors, subtitle, preview }) {
  return (
    <div className="subsection">
      <h3>
        <span>{title}</span>
        <span className={styles.authors}>
          &nbsp;- {authors.join(', ')}
        </span>
      </h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <Label text="Preview" color="red" url={preview} />
    </div>
  )
}
