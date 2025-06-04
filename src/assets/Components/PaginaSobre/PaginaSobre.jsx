import "./PaginaSobre.css"

function PaginaSobre() {
    return (
        <>
            <section className="sobreContainer">

                <div className="sobreContainerConteudo">

                    <h3 className="sobreSubtitulo">Sobre o Vizinhando</h3>
                    <h2 className="sobreTextoImpacto">Conectando pessoas, valorizando talentos locais</h2>
                    <p className="sobreTexto">O Vizinhando é uma plataforma criada para aproximar quem oferece um serviço de quem precisa dele — de forma simples, acessível e feita sob medida para a realidade dos bairros.
                        Mais do que uma solução digital, o Vizinhando nasceu como uma rede de apoio, inclusão e valorização dos pequenos profissionais, mostrando que muitas vezes a resposta que procuramos está mais perto do que imaginamos: na nossa própria vizinhança.</p>
                    <h3 className="sobreSubtitulo">Nossa História</h3>
                    <p className="sobreTexto">O projeto foi idealizado e desenvolvido no primeiro semestre de 2025, durante o Demoday do Instituto PROA, como resposta a um desafio real: como usar a tecnologia para gerar impacto social direto?
                        A partir dessa pergunta, surgiu o Vizinhando — uma plataforma que une tecnologia e humanidade para fortalecer a economia local, incentivar o empreendedorismo e promover conexões verdadeiras entre vizinhos.</p>
                    <h3 className="sobreSubtitulo">Nosso time</h3>
                    <p className="sobreTexto">O Vizinhando é fruto do trabalho colaborativo de uma equipe diversa, dedicada e apaixonada pelo que faz. Cada integrante contribuiu com suas habilidades para transformar uma ideia em uma solução real.
                        Conheça nosso time:</p>

                    <section className="devsGrid">

                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Laura.svg" alt="Laura" />
                            <p>Laura – P.O / Front end</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Breno.svg" alt="Breno" />
                            <p>Breno –Scrum Master- Full Stack</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Rodrigues.svg" alt="Felipe Rodrigues" />
                            <p>Felipe Rodrigues – Financeiro / Back end</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Luccas.svg" alt="Luccas" />
                            <p>Luccas – Front end</p>
                        </div>
                         <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Giovana.svg" alt="Giovana" />
                            <p>Giovana – Full Stack</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Abel.svg" alt="Abel" />
                            <p>Abel – Full Stack</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Negreiros.svg" alt="Felipe Negreiros" />
                            <p>Felipe Negreiros – Back end</p>
                        </div>
                        <div className="textoDevCargo">
                            <img className="sobreImagemDevs" src="./img/Desenvolvedores/Gustavo.svg" alt="Gustavo" />
                            <p>Gustavo – Back end / Social Media</p>
                        </div>

                    </section>

                    <p className="sobreTexto">Juntos, transformamos conhecimento técnico em impacto social.</p>
                    <h3 className="sobreSubtitulo">Nosso propósito</h3>
                    <p className="sobreTexto">Queremos que pessoas como o Carlos — o eletricista, o encanador, a manicure, a costureira, o técnico de informática, o jovem que entrega marmita ou conserta celulares — tenham um espaço digno para mostrar o que sabem fazer.
                        Queremos criar oportunidades, gerar renda e fortalecer o sentimento de comunidade.
                        O Vizinhando é pra quem acredita que ninguém precisa andar sozinho. E que, com um empurrãozinho da tecnologia, podemos fazer a diferença — rua por rua, bairro por bairro.</p>
                    <h4 className="sobreTextoSlogan">A sua solução pode estar na rua de cima!</h4>

                </div>

            </section>
        </>
    )
}

export default PaginaSobre;