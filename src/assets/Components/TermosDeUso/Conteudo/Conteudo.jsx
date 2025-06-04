import './Conteudo.css';
function ConteudoTermos(props){
    return(
        <div className = 'conteudoItem'>
            <h2 className = 'conteudoSubtitulo'>{props.numero}{props.subtitulo}</h2>
            <p className='paragrafo'>{props.paragrafo}</p>
        </div>

    )
}

export default ConteudoTermos;
