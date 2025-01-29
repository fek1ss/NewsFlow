import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(()=> {
    let timer = setInterval(()=> setDate(new Date()), 1000)

    return function cleanUp() {
      clearInterval(timer)
    }
  })

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>News Flow</h1>
      <p>поток актуальных новостей</p>
      <p className={styles.date}>{date.toLocaleDateString()}</p>
    </header>
  )
}

export default Header;