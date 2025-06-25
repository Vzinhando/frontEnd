import './campoDigitar.css';
//Não precisa mais do react imask
function CampoDigitar(props) {
  const { Nome, ...otherProps } = props;

  return (
    <>
      <h2 className='Nome2'>
        {Nome}
      </h2>
      <input className="type" {...otherProps} />
    </>
  );
}

export default CampoDigitar;