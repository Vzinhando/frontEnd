import { useState, useEffect } from 'react';
import './Carrossel.css';

const slides = [
    {
        imagem: '/imgCarrossel/jardineiro.svg',
        titulo: 'Contrate um jardineiro',
        texto: 'Aqui você pode encontrar o profissional que precisa',
        corBotao: '#fd7708',
    },
    {
        imagem: '/imgCarrossel/personal.svg',
        titulo: 'Contrate um Personal Trainer',
        texto: 'Profissionais Qualificados para Atender Suas Necessidades',
        corBotao: '#200c80',
    },
    {
        imagem: '/imgCarrossel/tatuador.svg',
        titulo: 'Contrate um tatuador',
        texto: 'Serviços Especializados ao Seu Alcance',
        corBotao: '#3d50e0',
    },
    {
        imagem: '/imgCarrossel/fotografo.svg',
        titulo: 'Contrate um fotografo',
        texto: 'Descubra e Contrate Especialistas de Confiança',
        corBotao: '#7D43EB',
    },
    {
        imagem: '/imgCarrossel/cabelereiro.svg',
        titulo: 'Contrate um cabeleireiro',
        texto: 'Transforme Seu Dia com Profissionais de Confiança',
        corBotao: '#fd7708',
    },
];

function Carrossel() {
    const [index, setIndex] = useState(0);
    const slideAtual = slides[index];

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <section className="carrossel">
            <div className="textosCarrossel">
                <h2 style={{ color: slideAtual.corBotao }}>{slideAtual.titulo}</h2>
                <p>{slideAtual.texto}</p>
                <button style={{ backgroundColor: slideAtual.corBotao }}>
                    Clique Aqui
                </button>
            </div>
            <div className="imgCarrossel">
                <img
                    className="imageCarrossel"
                    src={slideAtual.imagem}
                    alt={slideAtual.titulo}
                />
                <div className="navegacao">

                    <div className="barraProgresso">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`progresso ${i === index ? 'ativo' : ''}`}
                                style={{
                                    backgroundColor: i === index ? slideAtual.corBotao : 'transparent',
                                    border: i === index ? 'none' : '1px solid transparent',
                                }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carrossel;
