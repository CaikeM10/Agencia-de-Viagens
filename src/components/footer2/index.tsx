import styles from "./styles.module.scss";

export default function Footer2() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img src="/" alt="" />
              <div className={styles.socials}>
                <img src="/InstagramLogo.svg" alt="Instagram" />
                <img src="/WhatsappLogo.svg" alt="Instagram" />
              </div>
            </div>
            <div className={styles.middle}>
              <h1>Contato</h1>
              <div className={styles.row}>
                <img src="/mapPin.svg" alt="Mapa" />
                <p> São Paulo, SP</p>
              </div>
              <div className={styles.row}>
                <img src="/phone.svg" alt="Telefone" />
                <p>+55 (11) 9967930315</p>
              </div>
            </div>
            <div className={styles.right}>
              <h1>Políticas</h1>
              <p>Política de privacidade</p>
              <p>Termos e condições</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>E ai Destino © 2025 - Todos os direitos reservados.</p>
        </div>
      </div>
    </>
  );
}
