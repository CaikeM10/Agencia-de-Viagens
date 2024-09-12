import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <img src="/logoCrop.png" />
            <div className={styles.letters}>
              <p>Fb.</p>
              <p>Ig.</p>
              <p>Tw.</p>
              <p>Be.</p>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.box}>
              <h5>ROTTERDAM</h5>
              <h4>Crafto digital media.</h4>
              <p>Graaf florissaat 22A,</p>
              <p>Netherlands.</p>
            </div>
            <div className={styles.box}>
              <h5>ROTTERDAM</h5>
              <h4>Crafto digital media.</h4>
              <p>Graaf florissaat 22A,</p>
              <p>Netherlands.</p>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.box2}>
              <h5>WORK INQUIRIES</h5>
              <p>Graaf florissaat 22A,</p>
              <h4>hello@yourdomain.com</h4>
            </div>
            <div className={styles.box2}>
              <h5>ROTTERDAM</h5>
              <p>Graaf florissaat 22A,</p>
              <h4>hello@yourdomain.com</h4>
            </div>
          </div>
          <div className={styles.rightside}>
            <h2>SIGN UP FOR THE NEWSLETTER</h2>
            <div className={styles.inputContainer}>
              <input type="email" placeholder="Enter your email..." />
              <img src="/mail.svg" alt="mail icon" />
            </div>
            <div className={styles.privacy}>
              <img src="/hand.svg" alt="handshake icon" />
              <p>Protecting your privacy</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <p>
              © 2024 Crafto is Proudly Powered by <span>SolidTech</span>
            </p>
          </div>
          <div className={styles.rightBottom}>
            <p>Privacy policy</p>
            <p>Terms and conditions</p>
            <p>Copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
