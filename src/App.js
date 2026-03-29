import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      
      {/* Navegação Minimalista */}
      <nav className="site-nav">
        <div className="brand">Neuro<span>Rehab</span></div>
        <a href="#simulador" className="btn-outline">Ir para a Demo</a>
      </nav>

      {/* Hero Section Editorial (Assimétrica) */}
      <header className="hero-editorial">
        <div className="hero-text">
          <span className="eyebrow">Projeto Braining 2026</span>
          <h1>Reabilitação que respeita o tempo e a mente.</h1>
          <p className="lead-paragraph">
            Sabemos que o AVC vai além da motricidade. A fadiga, a frustração e o peso 
            emocional tornam a recuperação exaustiva para o paciente e para quem cuida. 
            E se a tecnologia de Realidade Virtual conseguisse "sentir" isso?
          </p>
          <div className="hero-actions">
            <a href="#simulador" className="btn-solid">Experimentar Simulação</a>
            <a href="#metodo" className="link-text">Entender a nossa abordagem &darr;</a>
          </div>
        </div>
        <div className="hero-visual">
          {/* Elemento visual suave em vez de uma foto de stock genérica */}
          <div className="abstract-shape">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
      </header>

      {/* Secção do Método (Layout Natural em Zig-Zag) */}
      <section id="metodo" className="method-section">
        <div className="content-container">
          
          <div className="text-block main-thesis">
            <h2>Não basta um jogo imersivo. É preciso uma rede de segurança.</h2>
            <p>
              A maioria das soluções VR foca-se apenas na pontuação do exercício. Nós focamo-nos na <strong>sustentabilidade do uso</strong>. 
              Integramos mecanismos éticos que avaliam o humor e o cansaço do paciente antes de cada sessão, ajustando 
              dinamicamente o ambiente virtual.
            </p>
          </div>

          <div className="features-organic">
            <div className="feature-item">
              <span className="feature-number">01</span>
              <div>
                <h3>Check-in Emocional</h3>
                <p>O simulador adapta o esforço cognitivo exigido com base no estado reportado. Mais cansaço resulta num ambiente mais calmo e tolerante a erros.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-number">02</span>
              <div>
                <h3>O Fator Cuidador</h3>
                <p>A sobrecarga de quem cuida é real. A nossa plataforma sinaliza padrões de desmotivação prolongada e facilita a ponte com o terapeuta.</p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-number">03</span>
              <div>
                <h3>Adesão a Longo Prazo</h3>
                <p>Preservamos a dignidade e a autonomia. Sem frustrações desnecessárias, a rotina de recuperação torna-se um hábito positivo e não um castigo.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Secção da Demo (Apresentação Limpa da Vossa Solução) */}
      <section id="simulador" className="demo-showcase">
        <div className="demo-header">
          <h2>O Nosso Protótipo</h2>
          <p>Explore o ambiente VR e veja como a adaptação cognitiva funciona na prática.</p>
        </div>

        <div className="demo-window">
          <div className="window-bar">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="window-title">Ambiente de Simulação VR - Versão Demo</span>
          </div>
          <div className="iframe-wrapper">
            <iframe
              title="Simulador de Reabilitação VR"
              src={`${process.env.PUBLIC_URL}/unity/index.html`}
              style={{
                width: "100%",
                height: "600px",
                border: "none"
              }}
            />
            <div className="iframe-fallback">
              <p>Demo em carregamento...</p>
              <span>(Insira o seu build WebGL/WebXR na pasta public/demo/)</span>
            </div>
          </div>
        </div>
        <p className="demo-hint">Interaja com o rato ou toque para explorar o espaço terapêutico.</p>
      </section>

      {/* Footer Simples */}
      <footer className="site-footer">
        <p>Criado para o Hackathon: Suporte pós-AVC — Humor, Fadiga e Cognição</p>
      </footer>

    </div>
  );
}