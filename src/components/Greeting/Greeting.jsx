import React from 'react'
import { greeting } from '../../data'
import Markdown from '../Markdown/Markdown'
import styles from './Greeting.module.css'

export default function Greeting () {
  return (
    <div className="section">
      <p className={styles.greet}>{greeting.greet}</p>
      <h2 className={styles.introduction}>{greeting.introduction}</h2>
      <p className={styles.about}>
        <Markdown>{greeting.about}</Markdown>
      </p>
      <p className={styles.profession}>
        <Markdown>{greeting.profession}</Markdown>
      </p>
    </div>
  )
}
