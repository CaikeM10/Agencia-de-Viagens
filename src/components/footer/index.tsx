import Link from "next/link";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <img src="/logoCrop.png" alt="Logo Easy Visa" />
            <div className={styles.letters}>
              <Link href="https://www.instagram.com/agenciaeasyvisa/">
                <img src="/instagram.svg" alt="insta" />
              </Link>
              <Link href="https://wa.me/message/AVAYUU2HYYIOJ1">
                <img src="/whatsapp.svg" alt="whats" />
              </Link>
            </div>
          </div>

          <div className={styles.middle}>
            <div className={styles.box2}>
              <h5>DÚVIDAS SOBRE SERVIÇOS</h5>
              <p>Atendimento 100% online</p>
              <h4>contato@easyvisa.com.br</h4>
            </div>
            <div className={styles.box2}>
              <h5>SUPORTE AO CLIENTE</h5>
              <p>Disponível em todo o Brasil</p>
              <p>Atendimento remoto</p>
              <h4>suporte@easyvisa.com.br</h4>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.rightTop}>
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
            <div className={styles.rightBottom}>
              <Link href="https://www.reclameaqui.com.br/">
                <img src="reclame.png" alt="reclame" />
              </Link>
              <Link href="https://cadastur.turismo.gov.br/hotsite/#!/public/capa/entrar">
                <img src="cadastur.png" alt="cadastur" />
              </Link>
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
