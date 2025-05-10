import styles from "./speakers-section.module.css"

export default function SpeakersSection() {
  
  const speakers = [
    {
      name: "Great Adams",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Aluko Excel",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Sunday Kingsley Udemma",
      role: "Product Designer, Founder, Traveler & Adventurer",
      image: "/p.jpg",
    },
    {
      name: "Great Adams",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Aluko Excel",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Sunday Kingsley Udemma",
      role: "Product Designer, Founder, Traveler & Adventurer",
      image: "/p.jpg",
    },
    {
      name: "Great Adams",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Aluko Excel",
      role: "Software Engineer",
      image: "/p.jpg",
    },
    {
      name: "Sunday Kingsley Udemma",
      role: "Product Designer, Founder, Traveler & Adventurer",
      image: "/p.jpg",
    },
  ]

  return (
    <section className={styles.speakersSection} id="speakers">
      <div className={styles.speakersContainer}>
        <h2 className={styles.speakersTitle}>Speakers</h2>

        <div className={styles.speakersGrid}>
          {speakers.map((speaker, index) => (
            <div key={index} className={styles.speakerCard}>
              <img
                src={speaker.image || "/.svg"}
                alt={`${speaker.name} - ${speaker.role}`}
                className={styles.speakerImage}
              />
              <div className={styles.speakerInfo}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
                <p className={styles.speakerRole}>{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
