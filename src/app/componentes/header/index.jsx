import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/componentes/header/imgs/logo.png';
import estilos from '@/app/componentes/header/styles.module.css';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className={estilos.inicio}>
            <nav className={estilos.navbar}>
                <div className={estilos.logo}>
                    <Link href="/">
                        <Image src={Logo} width={100} alt="logoPortfolio" />
                    </Link>
                </div>
                <button className={estilos.menu_btn} onClick={toggleMenu}>
                    {menuAberto ? <X size={30} /> : <Menu size={30} />}
                </button>
                <div className={`${estilos.nav_links} ${menuAberto ? estilos.aberto : ''}`}>
                    <ul>
                        <li><Link href="/sobre">SOBRE MIM</Link></li>
                        <li><Link href="/servicos">SERVIÇOS</Link></li>
                        <li><Link href="/projetos">PROJETOS</Link></li>
                        <li><Link href="/contatos">CONTATOS</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
