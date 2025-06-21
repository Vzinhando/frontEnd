import { NavLink } from 'react-router-dom';
import './Banner1.css'

function Banner1() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="/img/ImagemLaura/Logo4.svg" alt="Logo Vizinhando" />
        </div>
        <div className="texto">
          <h1>Divulgue seu talento no seu bairro!</h1>
          <NavLink className="buttonBanner1" to="/informacoes-pessoais">Comece agora!</NavLink>
        </div>
      </div>
    </>
  );
}

export default Banner1