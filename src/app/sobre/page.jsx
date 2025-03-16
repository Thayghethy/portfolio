import estilos from "./styles.module.css"

export default function sobre(){
    return(
    <section className={estilos.sobre}>
        <div className={estilos.sobre_titulo}>
            <h1>SOBRE MIM</h1>
        </div>
        <div className={estilos.sobre_conteudo}>    
            <p>Sou Desenvolvedor Fullstack Júnior, com habilidades em HTML, CSS, JavaScript, React, Node.js, Express e Java. Tenho experiência em liderança e administração de equipes, além de um forte conhecimento em algoritmos e lógica de programação. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e Técnico em Telecomunicações, buscando sempre aprimorar minhas habilidades e acompanhar as tendências do mercado.

            Destaco minha participação no desenvolvimento do SmartFlow, um sistema web empresarial que otimiza a busca por tutoriais e procedimentos internos, contribuindo para maior eficiência organizacional. Estou sempre aberto a novos desafios e oportunidades que me permitam evoluir profissionalmente e agregar valor por meio da tecnologia.
            </p>
        </div>
    </section> 
    )
}