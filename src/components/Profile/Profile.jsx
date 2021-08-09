import React from 'react'
import { profile } from '../../data'
import Dataset from '../Dataset/Dataset'
import styles from './Profile.module.css'

export default function Profile () {
  const mailUrl = `mailto:${profile.email}`
  const { city, district, state, country, zip } = profile.address
  const address = `${city},\n${district}, ${state},\n${country} - ${zip}`
  const link = ({ name, text, url }) => (
    <Dataset label={name} value={text} url={url} />
  )
  return (
    <div className={styles.profile}>
      <div className={styles.photo}>
        <img src={profile.photo} alt="Renjith VK" />
      </div>
      <div className={styles.contact}>
        <Dataset label="Email" value={profile.email} url={mailUrl} />
        <Dataset label="Phone" value={profile.phone} />
      </div>
      <div className={styles.address}>
        <Dataset label="Address" value={address} breaked={true} />
      </div>
      <div className={styles.links}>
        {profile.links.map(link)}
      </div>
    </div>
  )
}
