import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <section className="containerHeader">
            <div className="logoHeader">
               
                <img className="imagemHeader" src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="60px" />
                <h1 className="titulo">
                    <NavLink to = "/"><img src="/img/Logo/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" /></NavLink>
                </h1>
            </div>
            <div className="menuHeader">
                <p><NavLink className={'sobreHeader'} to = "/sobre">Sobre</NavLink></p>
                <p>Ajuda</p>
            </div>
            <div className="usuarioHeader">
                <a className="botaoLoginHeader"><NavLink to = "login" className={'loginClickHeader'}>Login</NavLink></a>
                <a className="botaoCadastroHeader">Cadastro</a>
            </div>
        </section>

    )
}

export default Header;