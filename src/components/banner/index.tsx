import styles from "./styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftSide}>
          <div className={styles.leftLines}>
            <div className={styles.title}>
              <h1>EASY </h1>
              <h2>VISA</h2>
              <div className={styles.description}>
                <p>
                  {"Somos a maior agência de viagem com o preço mais justo!"
                    .split("")
                    .map((char, index) => (
                      <span
                        key={index}
                        style={{
                          animationDelay: `${index * 0.05}s`,
                          display: char === " " ? "inline-block" : "inline",
                          width: char === " " ? "0.25em" : "auto",
                        }}
                      >
                        {char}
                      </span>
                    ))}
                </p>
                <button>
                  <img
                    src="/button.svg"
                    alt="ButtonArrow"
                    className={styles.arrow}
                  />
                  Saiba mais!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.rightBox}>
            <img src="/arrow.svg" alt="Arrow" />
            <h2>Conheça lugares incríveis!</h2>
            <p>Entre em contato conosco e realize um orçamento!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
