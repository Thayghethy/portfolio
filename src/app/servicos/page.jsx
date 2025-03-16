import estilos from "./style.module.css"

export default function servicos(){
    return (
        <section className={estilos.section}>
        <div className={estilos.servicos_titulo}>
            <h1>SERVIÇOS</h1>
        </div>
        <div className={estilos.conteudo_servicos}>
            <ol type="1">
                <li>Desenvolvimento FullStack</li>
                    <p>Criação de aplicações web responsivas e dinâmicas utilizando tecnologias como HTML, CSS, JavaScript e React.</p>
                <li>Frontend Moderno e Interativo</li>
                    <p>Desenvolvimento de interfaces intuitivas e otimizadas para experiência do usuário, utilizando React para criar componentes reutilizáveis e performáticos.</p>
                <li>Backend e Lógica de Negócio</li>
                    <p>Implementação de APIs e sistemas backend eficientes para processar dados e garantir segurança e escalabilidade.</p>
                <li>Otimização e Performance</li>
                    <p>Melhoria no desempenho de aplicações web, reduzindo tempo de carregamento e otimizando código para maior eficiência.</p>
                <li>Gestão de Projetos e Liderança</li>
                    <p>Experiência na administração de equipes e projetos, garantindo entregas dentro do prazo e com qualidade.</p>
                <li>Consultoria e Manutenção de Sistemas</li>
                    <p>Aprimoramento de sistemas já existentes, correção de bugs e implementação de novas funcionalidades.</p>
            </ol>
        </div>
    </section>
    )
}