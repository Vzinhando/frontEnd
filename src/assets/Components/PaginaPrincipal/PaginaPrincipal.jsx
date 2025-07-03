import React, { lazy, Suspense } from 'react'
import "./PaginaPrincipal.css";
//COMPONENTES ACIMA DA DOBRA (CARREGAMENTO NORMAL E IMEDIATO)
import Hero from "./Hero/Hero";
import Carrossel from "./Carrossel/Carrossel";

// Todos estes componentes só serão baixados quando o usuário rolar a página
const BlocoChatBot = lazy(() => import("./BlocoChatBot/BlocoChatBot"));
const BlocoServicoTrabalho = lazy(() => import("./BlocoServicoTrabalho/BlocoServicoTrabalho"));
const BlocoMulher = lazy(() => import("./BlocoMulher/BlocoMulher"));
const Duvida = lazy(() => import("./BlocoDuvida/duvida"));
const AgrupamentoCardAvaliacao = lazy(() => import("./AvaliacoesHome/CardAvaliacao/AgrupamentoCardAvaliacao"));
const Assinatura = lazy(() => import("./BlocoClube/Assinatura"));

const Loading = () => <div style={{height: '100px'}}></div>;


function PaginaPrincipal() {
    return (
        <main>
            {/* Componentes do topo não precisam de animação de scroll */}
            <Hero />
            <Carrossel />

            <Suspense fallback={<Loading />}>
                {/* Envolvemos cada componente lazy-loaded em uma div com data-aos */}

                <div data-aos="fade-up">
                    <BlocoChatBot />
                </div>

                <div data-aos="fade-up" data-aos-delay="100">
                    <BlocoServicoTrabalho />
                </div>

                <div data-aos="fade-right">
                    <BlocoMulher />
                </div>
                
                <div data-aos="fade-left">
                    <Duvida />
                </div>

                <div data-aos="zoom-in">
                    <AgrupamentoCardAvaliacao />
                </div>

                <div data-aos="fade-up" data-aos-duration="1200">
                    <Assinatura />
                </div>

            </Suspense>
        </main>
    );
}

export default PaginaPrincipal;