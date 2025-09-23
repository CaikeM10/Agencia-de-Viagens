import styles from "./styles.module.scss";
import Image from "next/image";

export default function BannerServices() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
                <h1>Nossos Serviços</h1>       
        <h4>Abaixo estão alguns dos nossos serviços ofertados, explore!</h4>
                <Image src="/arrowUp.svg" alt="Arrow" width={30} height={30} /> 
      </div>
    </div>
  );
}
