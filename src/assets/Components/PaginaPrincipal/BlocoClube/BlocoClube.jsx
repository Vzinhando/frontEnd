import './BlocoClube.css'

function BlocoClube(props) {
     const handleAssinar = () => {

        localStorage.setItem('planoSelecionado', JSON.stringify({
            titulo: props.TituloClube,
            Plano: props.paraQuemEOPlano,
            valor: props.valor
        }));

        window.open('/paginapagamento', '_blank');//Abrir a pagina de pagamento em uma nova aba.
    }
    return (

        <div className={`container${props.tipoBloco}`}>
            <div className="principaisInfo">
                <h1 className="tituloClube">{props.TituloClube}</h1>
                <h1 className="valor">{props.valor}</h1>
                <h1 className='paraQuemEOPlano'>{props.paraQuemEOPlano}</h1>
            </div>

            <div className="informacoes">
                <img className="tipoImg" src={props.tipo} alt={props.alt} />
                <p className='info'>{props.info1}</p>
            </div>


            <div className="informacoes">
                <img className="tipo" src={props.tipo} alt={props.alt} />
                <p className='info'>{props.info2}</p>

            </div>

            <div className="informacoes">
                <img className="tipo" src={props.tipo} alt={props.alt} />
                <p className='info'>{props.info3}</p>

            </div>

            <div className="informacoes">
                <img className="Tipo" src={props.tipo2} alt={props.alt} />
                <p className='info'>{props.info4}</p>
            </div>
            <div className="blocoBotao">
               <button className = "botaoPlano" onClick={handleAssinar}>Assinar</button>
            </div>
        </div>

    )
}

export default BlocoClube;
