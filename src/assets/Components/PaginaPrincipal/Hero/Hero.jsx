import { useState, useEffect } from 'react'; // 
import './Hero.css';
import search from "../../../../../public/img/search.svg"
import { NavLink } from 'react-router-dom';


const backgrounds = ["url('/imgHero/pintorCarrosselMain.svg')", "url('/imgHero/costureiraCarrosselMain.svg')", "url('/imgHero/cozinheiraCarrosselMain.svg')"];

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
              onClick={() => setSlideIndex(idx)} 
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
              <NavLink to = "/pre-cadastro-prestador" className = "cadastrarHero" type="submit">Cadastrar agora</NavLink>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
