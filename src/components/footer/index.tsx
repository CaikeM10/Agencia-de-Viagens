import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <img src="/logoCrop.png" alt="Logo Easy Visa" />
            <div className={styles.letters}>
              <p>Fb.</p>
              <p>Ig.</p>
              <p>Tw.</p>
              <p>Be.</p>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.box}>
              <h5>SÃO PAULO</h5>
              <h4>Easy Visa Agência de Viagens.</h4>
              <p>Avenida Paulista, 1234,</p>
              <p>Brasil.</p>
            </div>
            <div className={styles.box}>
              <h5>RIO DE JANEIRO</h5>
              <h4>Easy Visa Agência de Viagens.</h4>
              <p>Rua das Laranjeiras, 567,</p>
              <p>Brasil.</p>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.box2}>
              <h5>DÚVIDAS SOBRE SERVIÇOS</h5>
              <p>Avenida Paulista, 1234,</p>
              <h4>contato@easyvisa.com.br</h4>
            </div>
            <div className={styles.box2}>
              <h5>SUPORTE AO CLIENTE</h5>
              <p>Rua das Laranjeiras, 567,</p>
              <p>Brasil</p>
              <h4>suporte@easyvisa.com.br</h4>
            </div>
          </div>
          <div className={styles.rightside}>
            <h2>INSCREVA-SE PARA RECEBER NOVIDADES</h2>
            <div className={styles.inputContainer}>
              <input type="email" placeholder="Digite seu email..." />
              <img src="/mail.svg" alt="Ícone de email" />
            </div>
            <div className={styles.privacy}>
              <img src="/hand.svg" alt="Ícone de privacidade" />
              <p>Garantimos a proteção da sua privacidade</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <p>
              © 2024 Easy Visa desenvolvido por
              <span>SolidTech</span>
            </p>
          </div>
          <div className={styles.rightBottom}>
            <p>Política de Privacidade</p>
            <p>Termos e Condições</p>
            <p>Direitos Autorais</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
