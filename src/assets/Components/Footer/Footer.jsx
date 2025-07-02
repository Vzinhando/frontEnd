import './Footer.css'
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
                <NavLink to = "/sobre" className = "conhecerFooter">Conheça o Vizinhando</NavLink>
              </ul>
            </div>
            <div className="bloco">
              <h3 className="subTitulo">Trabalhe Conosco</h3>
              <ul>
                <NavLink className = "cadastrarFooter" to="/cadastro-prestador">Cadastre-se</NavLink>
              </ul>
            </div>
          </section>
        </section>

        <section className='termosDePolitica'>
          <p className='politica'>Politica de privacidade</p>
          <NavLink className='termosFooter' to = "/termos">Termos de uso</NavLink>
        </section>

        <section className='redeSocialRodape'>
          <a href="https://www.instagram.com/vzinhando/"><img src="./img/SocialMedia/icon_instagram.svg" alt="instagram" width="50px" /></a>
          <a href="https://github.com/Vzinhando"><img src="./img/SocialMedia/icon_github.svg" alt="github" width="50px" /></a>
          <a href="https://www.linkedin.com/company/vizinhando-plataforma/"><img src="./img/SocialMedia/icon_linkedin.svg" alt="linkedin" width="50px" /></a>
        </section>
        <p className="footerCopyright">Vizinhando © 2025 | Todos os direitos reservados.</p>
      </section>
    </>
  )
}

export default Footer;