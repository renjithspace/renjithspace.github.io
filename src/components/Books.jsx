import React from 'react'
import { books } from '../data'
import Book from './Book/Book'

export default function Books () {
  const book = ({ title, authors, subtitle, preview }) => (
    <Book
      title={title}
      authors={authors}
      subtitle={subtitle}
      preview={preview} />
  )
  return (
    <div className="section">
      <h2>Favourite Books</h2>
      {books.map(book)}
    </div>
  )
}
