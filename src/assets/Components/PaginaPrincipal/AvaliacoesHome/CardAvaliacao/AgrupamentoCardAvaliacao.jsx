import { useState, useRef, useEffect } from "react";
import CardAvaliacao from "./CardAvaliacao";
import "./AgrupamentoCardAvaliacao.css";

const avaliacoes = [
  {
    imagem: "./img/Pessoas_Avaliadas/mulherAvaliada01.svg",
    nome: "Isabela Lima Ferreira",
    descricao: "O Vizinhando está sendo essencial na minha vida, através da plataforma consigo alcançar clientes que eu não imaginava.",
  },
  {
    imagem: "./img/Pessoas_Avaliadas/homemAvaliado02.svg",
    nome: "Paulo Luiz de Souza",
    descricao: "O atendimento e a usabilidade do Vizinhando são excelentes, uma experiência muito positiva.",
  },
  {
    imagem: "./img/Pessoas_Avaliadas/mulherAvaliada02.svg",
    nome: "Maria Isabel Costa",
    descricao: "A plataforma do Vizinhando é intuitiva e confiável, me ajudou a expandir meu negócio pelo bairro rapidamente.",
  },
  {
    imagem: "./img/Pessoas_Avaliadas/mulherAvaliada03.svg",
    nome: "Maria Do Carmo",
    descricao: "Através da plataforma consigo alcançar clientes que antes seriam impossíveis de contatar.",
  },
  {
    imagem: "./img/Pessoas_Avaliadas/homemAvaliado01.svg",
    nome: "Lucas Mendes",
    descricao: "Uma experiência muito positiva, desde o atendimento inicial até a usabilidade da plataforma.",
  },
  {
    imagem: "./img/Pessoas_Avaliadas/homemAvaliado03.svg",
    nome: "Rafael Oliveira",
    descricao: "Confiável e intuitiva, a plataforma me ajudou a crescer meu negócio localmente de forma rápida e segura.",
  },
];

function AgrupamentoCardAvaliacao() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const getCardsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3;
    }
    return 1;
  };
  const [cardsPerPage, setCardsPerPage] = useState(getCardsPerPage());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerPage(getCardsPerPage());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  const totalCards = avaliacoes.length;
  const maxIndex = totalCards - cardsPerPage;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const cardWidthPercent = 100 / cardsPerPage;
  const offset = -currentIndex * cardWidthPercent;

  return (
    <article className="agrupamentoCardAvaliacao">
      <div className="carrosselContainer">
        <div 
          className="carrosselTrack" 
          ref={trackRef}
          style={{ transform: `translateX(${offset}%)` }}
        >
          {avaliacoes.map((avaliacao, index) => (
            <div className="cardAgrupamentoCard" key={index}>
              <CardAvaliacao
                imagemAvaliadoras={avaliacao.imagem}
                nomeAvaliadoras={avaliacao.nome}
                descricaoAvaliadoras={avaliacao.descricao}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="setasDivCard">
        <button 
          className="setaEsquerdaCardAvaliacao" 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"></path>
          </svg>
        </button>
        <button 
          className="setaDireitaCardAvaliacao" 
          onClick={handleNext} 
          disabled={currentIndex >= maxIndex}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"></path>
          </svg>
        </button>
      </div>
    </article>
  );
}

export default AgrupamentoCardAvaliacao;