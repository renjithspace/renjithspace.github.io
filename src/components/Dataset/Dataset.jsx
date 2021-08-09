import React from 'react'
import styles from './Dataset.module.css'

export default function Dataset ({ label, value, url, breaked }) {
  value = url ? <a href={url}>{value}</a> : value
  const className = breaked
    ? `${styles.dataset} ${styles.break}`
    : styles.dataset
  return (
    <div className={className}>
      <div className={styles.label}>{label}:</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}
