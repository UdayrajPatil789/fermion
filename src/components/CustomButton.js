import React from 'react'
import styles from "@/styles/home.module.css"

export const CustomButton = ({title}) => {
  return (
    <div className={styles.button}>{title}</div>
  )
}
export default CustomButton;