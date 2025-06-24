import './campoDigitar.css';
import { IMaskInput } from 'react-imask';

function CampoDigitar(props) {
  const { Nome, name, tipo, placeholder, value, onChange, mask, onBlur } = props;

  return (
    <>
      <h2 className='Nome2'>
        {Nome}
      </h2>
      {mask ? ( 
         <IMaskInput
          mask={mask}
          name={name}
          className="type"
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur} 
        />
      ) : ( 
        <input
          name={name}
          type={tipo}
          className="type"
          placeholder={placeholder}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    </>
  );
}

export default CampoDigitar;