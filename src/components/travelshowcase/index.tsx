import styles from "./styles.module.scss";

export default function TravelShowcase() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>
            Forward thinking team of designers, copywriters and developers.
          </h1>
        </div>
        <div className={styles.logo}>
          <img src="/logoCrop.png" />
          <hr />
          <p>3X MELHOR VIAGEM DO MUNDO</p>
        </div>
      </div>
    </section>
  );
}
