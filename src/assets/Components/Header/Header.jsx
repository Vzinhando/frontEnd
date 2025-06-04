import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <section className="container">
            <div className="logo">
               
                <img className="imagem" src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="60px" />
                <h1 className="titulo">
                    <NavLink to = "/"><img src="/img/Logo/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" /></NavLink>
                </h1>
            </div>
            <div className="menu">
                <p><NavLink className={'sobre'} to = "/sobre">Sobre</NavLink></p>
                <p>Ajuda</p>
            </div>
            <div className="usuario">
                <p className="botao_login"><NavLink to = "login" className={'loginClick'}>Login</NavLink></p>
                <p className="botao_cadastro">Cadastro</p>
            </div>
        </section>

    )
}

export default Header;