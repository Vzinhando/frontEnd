import './BlocoClube.css'

function BlocoClube(props) {
     const handleAssinar = () => {

        localStorage.setItem('planoSelecionado', JSON.stringify({
            titulo: props.TituloClube,
            Plano: props.paraQuemEOPlano,
            valor: props.valor
        }));

        window.open('/pagina-pagamento', '_blank');//Abrir a pagina de pagamento em uma nova aba.
    }
    return (

        <div className={`container${props.tipoBloco}`}>
            <div className="principaisInfo">
                <h1 className="tituloClube">{props.TituloClube}</h1>
                <h1 className="valorClube">{props.valor}</h1>
                <h1 className='paraQuemEOPlano'>{props.paraQuemEOPlano}</h1>
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
               <button className = "botaoPlano" onClick={handleAssinar}>Assinar</button>
            </div>
        </div>

    )
}

export default BlocoClube;
