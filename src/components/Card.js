import React from 'react'
import styles from '@/styles/card.module.css'

export const Card = ({title,text}) => {
  return (
    <div className={styles.card}>
        <div className={styles.title}>{title}+</div>
        <div className={styles.text}>{text}</div>
    </div>
  )
}
export default Card;
