import './footer.css'

function Footer() {
  return (
    <>
      <section id="cor_gradiente">
        <section id="container_footer">
          <div id="sub_logo">
            <img src="./img/Logo/Logo.svg" alt="Logo Vizinhando" width="60px" />
            <h1 className='titulo'><img src="./img/Logo/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" /></h1>
          </div>

          <section id="blocos_informativos">
            <div className="bloco">
              <h3 className="sub_titulo">Sobre nós</h3>
              <ul>
                <li>Conheça o Vizinhando</li>
                <li>Missão</li>
                <li>Objetivos</li>
                <li>Nossos parceiros</li>
              </ul>
            </div>

            <div className="bloco">
              <h3 className="sub_titulo">Produtos</h3>
              <ul>
                <li>Guias</li>
              </ul>
            </div>

            <div className="bloco">
              <h3 className="sub_titulo">Trabalhe Conosco</h3>
              <ul>
                <li>Carreira</li>
                <li>Cadastre-se</li>
              </ul>
            </div>
          </section>
        </section>

        <section id='termos_de_politica'>
          <p className='politica'>Politica de privacidade</p>
          <p className='termos'>Termos de uso</p>
        </section>

        <section id='rede_social_rodape'>
          <img src="./img/SocialMedia/icon_instagram.svg" alt="instagram" width="50px" />
          <img src="./img/SocialMedia/icon_github.svg" alt="github" width="50px" />
          <img src="./img/SocialMedia/icon_tiktok.svg" alt="tiktok" width="50px" />
          <img src="./img/SocialMedia/icon_linkedin.svg" alt="linkedin" width="50px" />
        </section>
        <p id="footer_copyright">Vizinhando © 2025 | Todos os direitos reservados.</p>
      </section>
    </>
  )
}

export default Footer;