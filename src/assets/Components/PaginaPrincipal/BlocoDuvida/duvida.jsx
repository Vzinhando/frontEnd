import "./Duvida.css";

import ImagemMulher from "../../../../../public/img/BlocoMulheres/duvidamulher.svg";

function Duvida() {
  return (
    <>
      <section className="containerPrincipalDuvida">
        <div className="duvidaContainerBloco">
          <h1 className="textoDuvida">
            O que estão dizendo
            <br /> sobre o vizinhando ?
          </h1>
          <img src={ImagemMulher} />
        </div>
      </section>
    </>
  );
}

export default Duvida;
