import "./BlocoServicoTrabalho.css"
import { NavLink } from "react-router-dom";

function BlocoServicoTrabalho() {
    return (
        <>
            <section className="servicoTrabalhoContainer">
                <div className="blocoServicoAzul">
                    <h2 className="servicoTexto">O que voce precisa está mais perto do que voce imagina!</h2>
                    <img className="blocoImagemServicoMapa" src="./img/Bloco_Servico_Trabalho/mapa_localizacao.svg" alt="mapa ilustrativo de locais que possui serviço" />
                    <NavLink to = "/pesquisar-servico"className="botaoServicoAzul">Procurar serviço!</NavLink>
                </div>
                <div className="blocoTrabalheLaranja">
                    <h2 className="trabalheTexto">Entre no Vizinhando e faça seu talento acontecer!</h2>
                    <img className="blocoImagemTrabalhePessoas" src="./img/Bloco_Servico_Trabalho/pessoas_comprando.svg" alt="imagem ilustrativa de pessoas comprando" />
                    <NavLink to="/pre-cadastro-prestador" className="botaoTrabalheLaranja">Trabalhe conosco! </NavLink>
                </div>
            </section>
        </>
    )
}

export default BlocoServicoTrabalho;