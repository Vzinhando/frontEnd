import { useRef } from "react";
import CardAvaliacao from "./CardAvaliacao";
import "./AgrupamentoCardAvaliacao.css";

function AgrupamentoCardAvaliacao() {
  const carrosselRef = useRef(null);

  const scroll = (direction) => {
    const container = carrosselRef.current;
    const cardWidth = container.firstChild.offsetWidth;
    let cardsPerView = 1;

    const width = window.innerWidth;
    if (width >= 1024) {
      cardsPerView = 3;
    } else if (width >= 768) {
      cardsPerView = 1;
    }

    const scrollAmount = direction === "left" ? -cardWidth * cardsPerView : cardWidth * cardsPerView;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <article className="agrupamentoCardAvaliacao">
      <div className="setasDivCard">
        <button className="setaEsquerdaCardAvaliacao" onClick={() => scroll("left")}>
          {/* SVG esquerda */}
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"></path>
          </svg>
        </button>
        <button className="setaDireitaCardAvaliacao" onClick={() => scroll("right")}>
          {/* SVG direita */}
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"></path>
          </svg>
        </button>
      </div>

      <div className="carrosselContainer" ref={carrosselRef}>
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        {/*cards teste de exemplo */}
        {/*cards teste de exemplo */}
        {/*cards teste de exemplo */}
        {/*cards teste de exemplo */}
        {/*cards teste de exemplo */}
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada01.svg"
          nomeAvaliadoras="Isabela Lima Ferreira"
          descricaoAvaliadoras="O vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar cliente que eu imaginava."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/homemAvaliado02.svg"
          nomeAvaliadoras="Paulo Luiz de Souza"
          descricaoAvaliadoras="O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva."
        />
        <CardAvaliacao
          imagemAvaliadoras="./img/Pessoas_Avaliadas/mulherAvaliada02.svg"
          nomeAvaliadoras="Maria Isabel Costa"
          descricaoAvaliadoras="A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente."
        />
        {/*fim dos exemplos */}
        {/*fim dos exemplos */}
        {/*fim dos exemplos */}
        {/*fim dos exemplos */}
        {/*fim dos exemplos */}
      </div>
    </article>
  );
}

export default AgrupamentoCardAvaliacao;
