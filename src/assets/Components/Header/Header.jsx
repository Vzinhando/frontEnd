import './Header.css'
import { NavLink, useNavigate } from 'react-router-dom';
import TradutorIdiomas from './TradutorIdiomas/TradutorIdiomas';
import { useState } from 'react';

function Header() {
    const navigate = useNavigate();

    const [menuAberto, setMenuAberto] = useState(false);


    const usuarioJSON = localStorage.getItem('usuarioLogado');
    const usuario = usuarioJSON ? JSON.parse(usuarioJSON) : null;

    const handleLogout = () => {
        localStorage.removeItem('usuarioLogado');
        navigate('/login');
        window.location.reload();
    };

    const abrirMenu = () => {
        setMenuAberto(!menuAberto);
    }

    return (
        <section className="containerHeader">
            <div className="logoHeader">

                <img className="imagemHeader" src="/img/Logo/Logo.svg" alt="Logo Vizinhando" width="60px" />
                <h1 className="tituloHeader">
                    <NavLink to="/"><img src="/img/Logo/Tipografia_Vizinhando.svg" alt="titulo do site vizinhando" width="250px" /></NavLink>
                </h1>
            </div>
            <div className="menuHeader">
                <NavLink className={'sobreHeader'} to="/sobre">Sobre</NavLink>
                <NavLink className={'sobreHeader'} target="_blank" to="https://linktr.ee/Vizinhando.web?utm_source=qr_code">Ajuda</NavLink>
            </div>
            <div className="traducaoIdioma">
                <TradutorIdiomas />
            </div>
            {usuario ? (
                <div className='perfilLogado' onClick={abrirMenu}>
                    <NavLink className>
                        <img src={usuario.foto || '/img/Desenvolvedores/Rodrigues.svg'}
                            alt={`Foto de ${usuario.nome}`}
                            className='fotoPerfilHeader'
                        />
                    </NavLink>
                    <span>Olá, {usuario.nome.split(' ')[0]}</span>
                    {menuAberto && (
                        <div className='menuPerfilHeader'>
                            <NavLink to='/perfil-cliente' className='perfilMenu'>Perfil</NavLink>
                            <button className='perfilMenu' onClick={handleLogout}>Sair</button>
                        </div>
                    )}
                </div>

            ) : (

                <div className="usuarioHeader">
                    <NavLink to="login" className={'loginClickHeader'}>Entrar</NavLink>
                    <a className="botaoCadastroHeader">Cadastro</a>
                </div>
            )}
        </section>
    )
}

export default Header;