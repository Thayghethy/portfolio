import estilos from "./page.module.css"
import Image from 'next/image'
import Link from 'next/link'
import Local from "@/app/images/local.png"
import Email from "@/app/images/email.png"
import Telefone from "@/app/images/telefone.png"
import Linkedin from "@/app/images/linkedin-preto.png"
import Instagram from "@/app/images/instagram-preto.png"
import Facebook from "@/app/images/facebook-preto.png"
import WhatsApp from "@/app/images/whatsapp-preto.png"

export default function contatos() {
    return (
        <section className={estilos.contato}>
        <div className={estilos.contato1}>
            <div className={estilos.local}>
                <Image src={Local} alt="local" width={80}/>
                <p>CURITIBA - PR</p>
            </div>
            <div className={estilos.email}>
                <Image src={Email} alt="email" width={80}/>
                <p> thayghethy@outlook.com</p>
            </div>
            <div className={estilos.telefone}>
                <Image src={Telefone} alt="telefone" width={80}/>
                <p>(46) 93300-4862</p>
            </div>
        </div>
        <div className={estilos.contato2}>
            <h4>Redes Sociais</h4>
            <div className={estilos.linkedin}>
                <Image src={Linkedin} alt="logoLinkedin" className={estilos.logo} width={80}/>
                <Link href="https://www.linkedin.com/in/thayghethy-souza-22428120a/" className={estilos.link} target="_blank">/in/thayghethy-souza-22428120a/</Link>
            </div>
            <div className={estilos.instagram}>
                <Image src={Instagram} alt="logoInsta" className={estilos.logo} width={80}/>
                <Link href="https://www.instagram.com/thayghethy_souza/" className={estilos.link} target="_blank">/thayghethy_souza</Link>
            </div>
            <div className={estilos.facebook}>
                <Image src={Facebook} alt="logoFace" className={estilos.logo} width={80}/>
                <Link href="https://www.facebook.com/thayghethy.souzadossantos.5" className={estilos.link} target="_blank">/thayghethy.souzadossantos.5</Link>
            </div>
            <div className={estilos.whatsapp}>
                <Image src={WhatsApp} alt="logoWhats" className={estilos.logo} width={80}/>
                <Link href="https://wa.link/m18529" className={estilos.link} target="_blank">(46) 93300-4862</Link>
            </div>
        </div>    
    </section>
    )
}