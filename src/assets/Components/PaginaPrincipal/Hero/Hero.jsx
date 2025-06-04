import { useState, useEffect } from 'react'; // 
import './Hero.css';
import search from "../../../../../public/img/search.svg"


const backgrounds = ["url('/imgHero/fundoCarrossel3.svg')", "url('/imgHero/costureira.svg')", "url('/imgHero/doceiro.svg')"];

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const backgroundStyle = {
    backgroundImage: backgrounds[slideIndex],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <main className="heroCarrossel" style={backgroundStyle}>
        <div className="pesquisa">
          <input type="text" placeholder="Serviço" />
          <input type="text" placeholder="CEP" />
          <button aria-label="Pesquisar">
            <span className="materialSymbolsOutlined"><img src={search} alt="" /></span>
          </button>
        </div>

        <div className="carrosselControles">
          {backgrounds.map((_, idx) => (
            <button
              key={idx}
              className={idx === slideIndex ? 'active' : ''}
              onClick={() => setSlideIndex(idx)} // Muda para a cor clicada
            />
          ))}
        </div>

        <div className="heroContainer">
          <div className="heroContent">
            <h1>
              Suas soluções<br />
              podem estar na<br />
              <span>rua de cima!</span>
            </h1>

            <form className='formularioHero' aria-label="Cadastro prestador de serviços">
              <h2>
                Cadastre-se como
                prestador de serviços
              </h2>
              <label htmlFor="email">E-mail*</label>
              <input type="email" id="email" placeholder="email@email.com.br" required />
              <button type="submit">Cadastrar agora</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
