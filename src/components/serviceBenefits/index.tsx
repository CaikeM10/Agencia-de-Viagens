import styles from "./styles.module.scss";

export default function ServiceBenefits() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Por Que Escolher Nossa Agência?</h2>
        <div className={styles.row}>
          <div className={styles.card}>
            <img src="/pencil.svg" alt="" />
            <h3>Personalização</h3>
            <h5>
              Serviços moldados às <br />
              suas necessidades e <br />
              expectativas.
            </h5>
          </div>
          <div className={styles.card}>
            <img src="/star.svg" alt="" />
            <h3>Experiência</h3>
            <h5>
              Equipe composta por <br />
              especialistas em <br />
              turismo.
            </h5>
          </div>
          <div className={styles.card}>
            <img src="/rewind.svg" alt="" />
            <h3>Suporte Contínuo</h3>
            <h5>
              Assistência antes,
              <br /> durante e após a <br /> viagem.
            </h5>
          </div>
        </div>
        <button>Saiba Mais</button>
      </div>
    </div>
  );
}
