import styles from "./about-section.module.css"

export default function AboutSection() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.aboutHeader}>
        <h2 className={styles.aboutTitle}>About</h2>
        <h3 className={styles.aboutSubtitle}>Let&apos;s Build Meet-Up</h3>
      </div>

      <div className={styles.aboutContent}>
        <p className={styles.aboutText}>
          LB DAO is Africas first On-Chain Intelligence tool, designed to harvest blockchain data by collecting,
          analyzing, and leveraging on-chain Transaction data. Instead of blindly tracking, we provide insights,
          governance, and funding mechanisms to ensure the right Web3 Solutions are created for Africa.
        </p>

        <p className={styles.aboutText}>
          We are not just another DAO we are  building Africas Web3 infrastructure, ensuring Africans do not just use
          blockchain, but actively shape its future. LB DAO is Africas first On-Chain Intelligence tool, designed to
          drive real blockchain adoption by collecting, analyzing, and leveraging on-chain Transaction data. Instead of
          blindly tracking, we provide insights, governance, and funding mechanisms to ensure the right Web3 Solutions
          are created for Africa.
        </p>

        <p className={styles.aboutText}>
          We are not just another DAO we are building Africas Web3 infrastructure, ensuring Africans do not just use
          blockchain, but actively shape its future.
        </p>
      </div>
    </section>
  )
}
