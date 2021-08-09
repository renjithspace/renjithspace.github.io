import React from 'react'
import styles from './Label.module.css'

export default function Label ({ text, color, url }) {
  const className = `${styles.label} ${styles[color]}`
  let label = <div className={className}>{text}</div>
  if (url) {
    label = <a className={styles.link} href={url}>{label}</a>
  }
  return label
}
