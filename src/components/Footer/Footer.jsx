import React from 'react'
import { footer } from '../../data'
import Markdown from '../Markdown/Markdown'
import styles from './Footer.module.css'

export default function Footer () {
  return (
    <div className={styles.footer}>
      <div className={styles.details}>
        <Markdown>{footer.details}</Markdown>
      </div>
      <Markdown>{footer.code}</Markdown>
    </div>
  )
}
