import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/app/componentes/header/imgs/logo.png'
import estilos from "@/app/componentes/header/styles.module.css"

export default function Header() {
    return (
    <header className={estilos.inicio}>
        <nav className={estilos.navbar}>
            <div className={estilos.logo}>
                <Image src={Logo} width={100} alt="logoPortfolio"/>
            </div>
            <div className={estilos.nav_links}>
                <ul>
                    <li><Link href="#sobre">SOBRE MIM</Link></li>
                    <li><Link href="#servicos">SERVIÇOS</Link></li>
                    <li><Link href="#projetos">PROJETOS</Link></li>
                    <li><Link href="#contato">CONTATOS</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    );
}