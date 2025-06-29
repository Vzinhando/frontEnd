import React from 'react';
import './BlocoMulher.css';
import MulherBloco from '../../../../../public/img/BlocoMulheres/mulher_com_produtos_maquiagem.svg';

function BlocoMulher() {
  return (
    <section className='BlocoMulher'>
      <div className='TextosBlocosMulher'>
        <h2 className='TextoBlocoMulher'>
          No Vizinhando, sua <br />
          vizinhança vira comunidade.
        </h2>
        <p className='Texto2BlocoMulher'>
          Descubra talentos, troque serviços, <br />
          participe de eventos e fortaleça laços <br />
          com quem está logo ali, do outro lado da rua.
        </p>
      </div>
      <img
        className='MulherfotoBlocoMulher'
        src={MulherBloco}
        alt="Ilustração de uma mulher segurando produtos de maquiagem e beleza."
        // 7. Adicionado lazy loading para performance
        loading="lazy"
      />
    </section>
  );
}
// 8. "Memoizado" para evitar re-renderizações
export default React.memo(BlocoMulher);