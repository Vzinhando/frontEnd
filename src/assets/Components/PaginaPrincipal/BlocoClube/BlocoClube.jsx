import './BlocoClube.css'
import { useNavigate } from 'react-router-dom';
function BlocoClube(props) {
    const navigate = useNavigate();

    const handleAssinar = () => {
        localStorage.setItem('planoSelecionado', JSON.stringify({
            titulo: props.TituloClube,
            Plano: props.paraQuemEOPlano,
            valor: props.valor
        }));
        navigate('/pagina-pagamento');
    }
    return (
        <div className={`container${props.tipoBloco}`}>
            <div className="principaisInfo">
                <h2 className="tituloClube">{props.TituloClube}</h2>
                <p className="valorClube">{props.valor}</p>
                <p className='paraQuemEOPlano'>{props.paraQuemEOPlano}</p>
            </div>

            <div className="informacoesBlocoClube">
                <img className="tipoImg" src={props.tipo} alt={props.alt} />
                <p className='infoClube'>{props.info1}</p>
            </div>

            <div className="informacoesBlocoClube">
                <img className="tipoImg" src={props.tipo} alt={props.alt} />
                <p className='infoClube'>{props.info2}</p>
            </div>

            <div className="informacoesBlocoClube">
                <img className="tipoImg" src={props.tipo} alt={props.alt} />
                <p className='infoClube'>{props.info3}</p>
            </div>

            <div className="informacoesBlocoClube">
                <img className="tipoImg" src={props.tipo2} alt={props.alt} />
                <p className='infoClube'>{props.info4}</p>
            </div>
            
            <div className="blocoBotao">
                <button className="botaoPlano" onClick={handleAssinar}>Assinar</button>
            </div>
        </div>
    )
}

export default BlocoClube;