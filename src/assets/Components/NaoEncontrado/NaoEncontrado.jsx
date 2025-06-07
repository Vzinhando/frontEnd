import "./NaoEncontrado.css"
import { NavLink } from "react-router-dom"

function NaoEncontrado (){
    return (
        <div className="naoEncontradoPage">
            <h1>Error 404: Página não encontrada</h1>
            <img src="/img/NaoEncontrado/rostoTristeNaoEncontrado.svg" alt="" />
                <NavLink className={'botaoNaoEncontrado'} to = "/">Início</NavLink>          
        </div>

    )
}
export default NaoEncontrado