import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/logoCrop.png" />
          <p>Home</p>
          <p>Agency</p>
          <p>Expertise</p>
          <p>Portfolio</p>
          <p>Contact</p>
        </div>
        <div className={styles.rightside}>
          <button>
            <img src="/mail2.svg" className={styles.icon} />
            <p>Mande uma mensagem</p>
          </button>
        </div>
      </div>
    </header>
  );
}
