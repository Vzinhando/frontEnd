import React from 'react';
import "./Duvida.css";
import ImagemMulher from "../../../../../public/img/BlocoMulheres/duvidamulher.svg"; 
function Duvida() {
    return (
        <section className="containerPrincipalDuvida">
            <div className="duvidaContainerBloco">
                {/* 4. Trocado h1 por h2 para melhor semântica e SEO */}
                <h2 className="textoDuvida">
                    O que estão dizendo
                    <br /> sobre o vizinhando ?
                </h2>
                <img 
                    src={ImagemMulher} 
                    alt="Ilustração de uma mulher com um balão de fala, representando a opinião de um cliente."
                    // 6. Adicionado lazy loading para performance
                    loading="lazy"
                />
            </div>
        </section>
    );
}
export default React.memo(Duvida);