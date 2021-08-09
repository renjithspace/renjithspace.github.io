import React from 'react'
import showdown from 'showdown'
import styles from './Markdown.module.css'

export default function Markdown ({ children: markdown }) {
  const converter = new showdown.Converter()
  const html = { __html: converter.makeHtml(markdown) }
  return (
    <span className={styles.markdown} dangerouslySetInnerHTML={html} />
  )
}
