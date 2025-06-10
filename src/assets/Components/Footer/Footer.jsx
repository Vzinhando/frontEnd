import './footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <section className="corGradiente">
        <section className="containerFooter">
          <div className="subLogo">
            <img src="./img/Logo/Logo.svg" alt="Logo Vizinhando" width="60px" />
            <h1 className='titulo'><img src="./img/Logo/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" /></h1>
          </div>

          <section className="blocosInformativos">
            <div className="bloco">
              <h3 className="subTitulo">Sobre nós</h3>
              <ul>
                <li>Conheça o Vizinhando</li>
                <li>Missão</li>
                <li>Objetivos</li>
                <li>Nossos parceiros</li>
              </ul>
            </div>

            <div className="bloco">
              <h3 className="subTitulo">Produtos</h3>
              <ul>
                <li>Guias</li>
              </ul>
            </div>

            <div className="bloco">
              <h3 className="subTitulo">Trabalhe Conosco</h3>
              <ul>
                <NavLink to="/cadastro-prestador">Cadastre-se</NavLink>
              </ul>
            </div>
          </section>
        </section>

        <section className='termosDePolitica'>
          <p className='politica'>Politica de privacidade</p>
          <p className='termos'>Termos de uso</p>
        </section>

        <section className='redeSocialRodape'>
          <img src="./img/SocialMedia/icon_instagram.svg" alt="instagram" width="50px" />
          <img src="./img/SocialMedia/icon_github.svg" alt="github" width="50px" />
          <img src="./img/SocialMedia/icon_tiktok.svg" alt="tiktok" width="50px" />
          <img src="./img/SocialMedia/icon_linkedin.svg" alt="linkedin" width="50px" />
        </section>
        <p className="footerCopyright">Vizinhando © 2025 | Todos os direitos reservados.</p>
      </section>
    </>
  )
}

export default Footer;