import styles from "./page.module.css";
import Link from 'next/link'
import Image from 'next/image'
import Instagram from './componentes/images/instagram-branco.png'
import Facebook from './componentes/images/facebook-branco.png'
import WhatsApp from './componentes/images/whatsapp-branco.png'
import Linkedin from './componentes/images/linkedin-branco.png'

export default function Home() {
  return (
    <section className={styles.banner}>
        <div className={styles.banner_fundo}>
        </div>
        <div className={styles.apresentacao}>
            <aside className={styles.apresentacao_texto}>
                <h2>Olá, me chamo</h2>
                <h1>Thayghethy Souza</h1>
                <h2>Programador FullStack Jr.</h2>
            </aside>
            <aside className={styles.botoes}>
                <a href="/Curriculo_Thayghethy.pdf" target="_blank" rel="noopener noreferrer">Currículo</a>
            </aside>
            <aside className={styles.redes_sociais}>
                <Link href="https://www.instagram.com/thayghethy_souza/" target="_blank"><Image src={Instagram} alt="logoInsta"/></Link>
                <Link href="https://www.facebook.com/thayghethy.souzadossantos.5" target="_blank"><Image src={Facebook} alt="logoFace"/></Link>
                <Link href="https://wa.link/m18529" target="_blank"><Image src={WhatsApp} alt="logoWhats"/></Link>
                <Link href="https://www.linkedin.com/in/thayghethy-souza-22428120a/" target="_blank"><Image src={Linkedin} alt="logoLinkedin"/></Link>
            </aside>
        </div>
    </section>
  );
}
