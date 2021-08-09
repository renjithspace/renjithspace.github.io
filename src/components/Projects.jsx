import React from 'react'
import { projects } from '../data'
import Project from './Project/Project'

export default function Projects () {
  const project = ({ name, brief, tools }) => (
    <Project name={name} brief={brief} tools={tools} />
  )
  return (
    <div className="section">
      <h2>Projects</h2>
      {projects.map(project)}
    </div>
  )
}
