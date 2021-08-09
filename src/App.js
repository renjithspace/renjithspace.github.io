import React from 'react'
import Profile from './components/Profile/Profile'
import Greeting from './components/Greeting/Greeting'
import Languages from './components/Languages'
import Projects from './components/Projects'
import Courses from './components/Courses'
import Books from './components/Books'
import Footer from './components/Footer/Footer'
import styles from './App.module.css'

export default function App () {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <Profile />
      </div>
      <div className={styles.main}>
        <Greeting />
        <Languages />
        <Projects />
        <Courses />
        <Books />
        <Footer />
      </div>
    </div>
  )
}
