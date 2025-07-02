import React, { lazy, Suspense } from 'react'
import "./PaginaPrincipal.css";
//COMPONENTES ACIMA DA DOBRA (CARREGAMENTO NORMAL E IMEDIATO)
import Hero from "./Hero/Hero.jsx";
import Carrossel from "./Carrossel/Carrossel.jsx";
// Todos estes componentes só serão baixados quando o usuário rolar a página
const BlocoChatBot = lazy(() => import("./BlocoChatBot/BlocoChatBot.jsx"));
const BlocoServicoTrabalho = lazy(() => import("./BlocoServicoTrabalho/BlocoServicoTrabalho.jsx"));
const BlocoMulher = lazy(() => import("./BlocoMulher/BlocoMulher.jsx"));
const Duvida = lazy(() => import("../BlocoDuvida/Duvida.jsx"));
const AgrupamentoCardAvaliacao = lazy(() => import("./AvaliacoesHome/CardAvaliacao/AgrupamentoCardAvaliacao.jsx"));
const Assinatura = lazy(() => import("./BlocoClube/Assinatura.jsx"));

const Loading = () => <div style={{height: '100px'}}></div>;


function PaginaPrincipal() {
    return (
        <main>
            <Hero />
            <Carrossel />
            {/*Suspense envolve todos os componentes lazy-loaded */}
            {/* O fallback pode ser um spinner, um esqueleto da UI, ou simplesmente nada */}
            <Suspense fallback={<Loading />}>
                <BlocoChatBot />
                <BlocoServicoTrabalho />
                <BlocoMulher />
                <Duvida />
                <AgrupamentoCardAvaliacao />
                <Assinatura />
            </Suspense>
        </main>
    );
}

export default PaginaPrincipal;