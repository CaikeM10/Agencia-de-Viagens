import styles from "./styles.module.scss";
import Image from "next/image";

export default function ServiceBenefits() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Por Que Escolher Nossa Agência?</h2>
        <div className={styles.row}>
          <div className={styles.card}>
            <Image src="/pencil.svg" alt="Pincel" width={32} height={32} />
            <h3>Personalização</h3>
            <h5>
              Serviços moldados às <br />
              suas necessidades e <br />
              expectativas.
            </h5>
          </div>
          <div className={styles.card}>
            <Image src="/star.svg" alt="Estrela" width={32} height={32} />
            <h3>Experiência</h3>
            <h5>
              Equipe composta por <br />
              especialistas em <br />
              turismo.
            </h5>
          </div>
          <div className={styles.card}>
            <Image src="/rewind.svg" alt="Tempo" width={32} height={32} />
            <h3>Suporte Contínuo</h3>
            <h5>
              Assistência antes,
              <br /> durante e após a <br /> viagem.
            </h5>
          </div>
        </div>
        <button
          onClick={() => window.open("https://wa.me/5511967930315", "_blank")}
        >
          Saiba Mais
        </button>
      </div>
    </div>
  );
}
