import "./PaginaPrincipal.css"
import ContrateUmServico from "./ContrateUmServico/ContrateUmServico"
import BlocoChatBot from "./BlocoChatBot/BlocoChatBot";
import BlocoServicoTrabalho from "./BlocoServicoTrabalho/BlocoServicoTrabalho";
import BlocoDuvida from "./BlocoDuvida/Duvida"
import BlocoMulher from "./BlocoMulher/BlocoMulher"
import Assinatura from "./BlocoClube/Assinatura";
import AgrupamentoCardAvaliacao from "./AvaliacoesHome/CardAvaliacao/AgrupamentoCardAvaliacao";
import Hero from "./Hero/Hero";
import Carrossel from "./Carrossel/Carrossel"
import Duvida from "./BlocoDuvida/Duvida";

function PaginaPrincipal() {
    return (
        <>
            <Hero/>
            <Carrossel/>
            <BlocoChatBot />
            <BlocoServicoTrabalho />
            <BlocoMulher />
            <Duvida />
            <AgrupamentoCardAvaliacao />
            <Assinatura />
        </>
    )
}

export default PaginaPrincipal;