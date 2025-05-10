import styles from "./sponsors-section.module.css"
import Image from "next/image"

export default function SponsorsSection() {
  
  const sponsors = [
    { name: "", logo: "/logos/1.jpg" },
    { name: "Alpha Venture", logo: "/logos/2.PNG" },
    { name: "", logo: "/logos/3.png" },
    { name: "Techrity", logo: "/logos/4.png" },
    { name: "Blockchain", logo: "/logos/5.PNG" },
    { name: "Binance", logo: "/logos/6.png" },
    { name: "Polygon", logo: "/logos/7.jpg" },
    { name: "Chainlink", logo: "/logos/8.PNG" },
    { name: "Hardwario", logo: "/logos/9.png" },
   
  ]

  return (
    <section className={styles.sponsorsSection} id="sponsors">
      <div className={styles.sponsorsContainer}>
        <h2 className={styles.sponsorsTitle}>
          Supported by many companies
          <br />
          around the world
        </h2>

        <div className={styles.sponsorsGrid}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className={styles.sponsorItem}>
              <div className={styles.sponsorLogo}>
                
                <Image
                  src={sponsor.logo || "/"}
                  alt={`${sponsor.name} logo`}
                  width={160}
                  height={100}
                  className={styles.logoImage}
                 
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
