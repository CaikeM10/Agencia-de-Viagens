import styles from "./styles.module.scss";
import Image from "next/image"; // Importa o componente Image

export default function CardSection() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/background.svg"
          alt=""
          className={styles.background}
          width={1920}
          height={1080}
        />
        <div className={styles.leftside}>
          <div className={styles.form}>
            <div className={styles.inputWrap}>
              <p>Nome</p>
              <input type="text" placeholder="Nome" />
            </div>
            <div className={styles.inputWrap}>
              <p>Email</p>
              <input type="text" placeholder="E-mail" />
            </div>
            <div className={styles.inputWrap}>
              <p>Telefone</p>
              <input type="text" placeholder="Telefone" />
            </div>
            <div className={styles.inputWrap}>
              <p>Mensagem</p>
              <textarea
                name=""
                id=""
                placeholder="Escreva aqui sua mensagem..."
              ></textarea>
            </div>
            <button>
              Entre em contato{" "}
              <Image src="/arrow-right.svg" alt="" width={20} height={20} />
            </button>
          </div>
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
              <Image src="/mapPin.svg" alt="Mapa" width={24} height={24} />
              <p> São Paulo, SP</p>
            </div>
            <div className={styles.row}>
              <Image src="/phone.svg" alt="Telefone" width={24} height={24} />
              <p>+55 (11) 967930315</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
