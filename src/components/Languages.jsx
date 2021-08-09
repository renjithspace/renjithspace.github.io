import React from 'react'
import { languages } from './../data'
import Label from './Label/Label'

export default function Languages () {
  const langauge = (langauge) => (
    <Label text={langauge} color="yellow" />
  )
  return (
    <div className="section">
      <h2>Languages</h2>
      {languages.map(langauge)}
    </div>
  )
}
