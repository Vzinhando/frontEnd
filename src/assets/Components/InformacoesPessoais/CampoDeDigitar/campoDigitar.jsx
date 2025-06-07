import './campoDigitar.css'

function CampoDigitar(props) {

    return (
        <>
        <h2 className='Nome2'>
          {props.Nome}
        </h2>
        <input type={props.tipo} pattern={props.telefone} className="type" placeholder={props.exemplo} required/>
        </>
    )
}

export default CampoDigitar