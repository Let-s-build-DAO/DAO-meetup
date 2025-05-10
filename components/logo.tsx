import Image from "next/image"
import styles from "./logo.module.css"

export function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/logo.png" alt="Open Pro Logo" width={120} height={40} className={styles.logoImage} priority />
    </div>
  )
}
