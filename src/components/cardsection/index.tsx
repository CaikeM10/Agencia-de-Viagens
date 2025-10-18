import styles from "./styles.module.scss";
import Image from "next/image"; // Importa o componente Image

{
  /** Formulário */
}
export default function CardSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/background.svg"
          alt="Fundo de ilustração abstrata"
          className={styles.background}
          width={1920}
          height={1080}
        />
        <div className={styles.leftside}>
          <form className={styles.form} action="/api/contact" method="POST">
            <div className={styles.inputWrap}>
              <p>Nome</p>

              <input type="text" placeholder="Nome" name="name" required />
            </div>
            <div className={styles.inputWrap}>
              <p>Email</p>

              <input
                type="email"
                placeholder="Digite o seu E-mail  "
                name="email"
                required
              />
            </div>
            <div className={styles.inputWrap}>
              <p>Telefone</p>

              <input type="tel" placeholder="Telefone" name="phone" />
            </div>
            <div className={styles.inputWrap}>
              <p>Mensagem</p>

              <textarea
                name="message"
                id="message"
                placeholder="Escreva aqui sua mensagem..."
              ></textarea>
            </div>

            <button type="submit">
              Entre em contato{" "}
              <Image
                src="/arrow-right.svg"
                alt="Seta para a direita"
                width={20}
                height={20}
              />
            </button>
          </form>
        </div>
        <div className={styles.rightside}>
          <div className={styles.title}>
            <h1>Fale conosco!</h1>
            <p>
              Para entrar em contato preencha o formulário ao lado, temos uma
              equipe de suporte que responderá em até 24H!
            </p>
          </div>
          <div className={styles.rowWrap}>
            <div className={styles.row}>
              <Image
                src="/mapPin.svg"
                alt="Ícone de localização no mapa"
                width={24}
                height={24}
              />
              <p>
                Estr. de Itapecerica, 1187 - Vila das Belezas, São Paulo - SP,
                05835-003
              </p>
            </div>
            <div className={styles.row}>
              <Image
                src="/phone.svg"
                alt="Ícone de telefone"
                width={24}
                height={24}
              />
              <p>+55 (11) 967930315</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
