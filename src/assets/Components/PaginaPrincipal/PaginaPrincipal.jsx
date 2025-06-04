import "./PaginaPrincipal.css"
import ContrateUmServico from "./ContrateUmServico/ContrateUmServico"
import BlocoChatBot from "./BlocoChatBot/BlocoChatBot";
import BlocoServicoTrabalho from "./BlocoServicoTrabalho/BlocoServicoTrabalho";
import BlocoDuvida from "./BlocoDuvida/duvida"
import BlocoMulher from "./BlocoMulher/BlocoMulher"
import Assinatura from "./BlocoClube/Assinatura";
import AgrupamentoCardAvaliacao from "./AvaliacoesHome/CardAvaliacao/AgrupamentoCardAvaliacao";
import Hero from "./Hero/Hero";
import Carrossel from "./Carrossel/Carrossel"

function PaginaPrincipal() {
    return (
        <>
            <Hero/>
            <Carrossel/>
            <BlocoChatBot />
            <BlocoServicoTrabalho />
            <BlocoMulher />
            <BlocoDuvida />
            <AgrupamentoCardAvaliacao />
            <Assinatura />
        </>
    )
}

export default PaginaPrincipal;