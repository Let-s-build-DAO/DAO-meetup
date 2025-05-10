import Image from "next/image"
import styles from "./page.module.css"
import AboutSection from "@/components/about-section"
import SponsorsSection from "@/components/sponsors-section"
import JoinSection from "@/components/join-section"

export default function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.heroSection}>
      
        <div className={styles.heroHeader}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt=" Logo" width={120} height={40} className={styles.logoImage} />
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Register for Event</button>
            <button className={styles.secondaryButton}>Join Community</button>
          </div>
        </div>

       
        <Image
          src="/hero-image.png"
          alt="Let's Build Meet-Up ConTOUR 2025"
          width={1440}
          height={900}
          className={styles.heroImage}
          priority
        />
      </div>

      <AboutSection />
      <SponsorsSection />
      
      <JoinSection />
    </div>
  )
}
