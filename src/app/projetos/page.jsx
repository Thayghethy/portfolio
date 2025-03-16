import estilos from "./style.module.css"
import Image from 'next/image'
import Lupa from "../images/lupa.jpg"
import Cruz from "../images/cruz.png"
import Aviao from "../images/aviao.png"
import Link from "next/link"

export default function projetos () {
    return(
<section className={estilos.section}>
    <div className={estilos.titulo_projetos}>
            <h1>PROJETOS</h1>
        </div>
        <div className={estilos.projetos_conteudo}>
            <div className={estilos.projetos} id="smartflow">
                <Image src={Lupa} alt="lupa" width={80}/>
                <h4>Projeto SmartFlow</h4>
                <p>Fui um dos desenvolvedores do projeto SmartFlow, um sistema empresarial para centralização de tutoriais e procedimentos internos, além de outras funcionalidades.</p>
                <Link className={estilos.link} href="https://thayghethy.github.io/SmartFlow" target="_blank">Acesse o Projeto!</Link>
                <Link className={estilos.link} href="https://github.com/Thayghethy/SmartFlow" target="blank">Acesse o código!</Link>
            </div>
            <div className={estilos.projetos} id="clinica">
                <Image src={Cruz} alt="cruz" width={80}/>
                <h4>Projeto para clínica</h4>
                <p>Projeto de landing page para uma clínica médica desenvolvida durante os estudos de HTML e CSS, aplicando conhecimentos sobre responsividade, HTML semântico e clean code.</p>
                <Link className={estilos.link} href="https://thayghethy.github.io/Cl-nica/" target="_blank">Acesse o Projeto!</Link>
                <Link className={estilos.link} href="https://github.com/Thayghethy/Cl-nica" target="blank">Acesse o código!</Link>
            </div>
            <div className={estilos.projetos} id="agencia">
                <Image src={Aviao} alt="aviao" width={80}/>
                <h4>Projeto Agência de Viagens</h4>
                <p>Projeto de website para agência de viagens, desenvolvido durante os estudos de HTML e CSS, aplicando conhecimentos sobre formulários e Flexbox. </p>
                <Link className={estilos.link} href="https://thayghethy.github.io/Agencia-de-Viagens" target="_blank">Acesse o Projeto!</Link>
                <Link className={estilos.link} href="https://github.com/Thayghethy/Agencia-de-Viagens" target="blank">Acesse o código!</Link>
            </div>
        </div>
    </section>
    )
}