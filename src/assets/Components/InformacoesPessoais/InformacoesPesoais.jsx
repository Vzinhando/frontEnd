import "./InformacoesPessoais.css";
import CampoDigitar from "./CampoDeDigitar/campoDigitar";

function InformacoesPessoais() {
  return (
    <>

      <main className="containerInformacoesPessoais">
        <h1 className="informacoesPessoais">Informações Pessoais</h1>

        <div className="Pai1">
          <section className="cartao1">
            <CampoDigitar Nome="Nome"
              tipo="text" />
            <CampoDigitar Nome="Telefone"
              telefone="^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$"
              exemplo="(99) 91234-5678"
              tipo="number" />
            <CampoDigitar Nome="Email"
              tipo="email" />
            <CampoDigitar Nome="Data de nascimento"
              tipo="date" />
            <h2 className="H2Genero">Gênero</h2>
              <div className="Genero">
            <label>
              <input type="radio"
              name="genero"
              className="round-checkbox" />
              Masculino
            </label>
            <label>
              <input type="radio"
              name="genero"
              className="round-checkbox" />
              Feminino
            </label>
            <label className="Outros">
              <input type="radio"
              name="genero"
              className="round-checkbox" />
              Outros
            </label>
            </div>
          </section>

          <section className="cartao2">
            <div className="Inputs">
              <CampoDigitar Nome="Cep"
              tipo="number"/>
              <CampoDigitar Nome="Cidade" />
              <CampoDigitar Nome="Rua"/>
              <div className="AoLado">
                <div className="Numero">
                  <CampoDigitar Nome="Numero" />
                </div>
                <div className="Bairro">
                  <CampoDigitar Nome="Bairro" />
                </div>
              </div>
            </div>

            <h2 className="LocalTipo">Tipo de local</h2>
            <div className="local">
            <label>
              <input type="radio"
              name="local"
              className="round-checkbox" />
              Residencial
            </label>
            <label className="comercial">
              <input type="radio"
              name="local"
              className="round-checkbox" />
              Estabelecimento comercial
            </label>
            </div>
          </section>
        </div>
        <div className="Pai2">
        <input type="button" value="Continuar" className="continuar"/>
        </div>
      </main>

    </>
  );
}

export default InformacoesPessoais;