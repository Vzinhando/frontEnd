import React, { lazy, Suspense } from 'react'
import "./PaginaPrincipal.css";
import Hero from "./Hero/Hero";
import Carrossel from "./Carrossel/Carrossel";
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
            <Hero />
            <Carrossel />
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