import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      
      {/* Navegação Minimalista */}
      <nav className="site-nav">
        <div className="brand">Binary<span>Beats</span></div>
      </nav>

      {/* --- Secção 1: O Título de Impacto (Fundo Escuro/Contraste) --- */}
      <section id="problema-titulo" className="hero-editorial-title dark-background">
        <div className="container-focus">
          <span className="eyebrow">O Problema</span>
          <h1 className="clear-title">
            O problema da reabilitação pós-AVC não é começar.<br/> 
            <span className="highlight">É desistir em silêncio.</span>
          </h1>
        </div>
        
        {/* Elemento visual mantido para decorar o cabeçalho */}
        <div className="hero-visual">
          <div className="abstract-shape">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
          </div>
        </div>
      </section>

      {/* --- Secção 2: A Explicação Decompactada (Fundo Claro/Clean) --- */}
      <section id="problema-detalhe" className="hero-editorial-details light-background">
        <div className="decompacted-content">
          <div className="text-grid">
            <div className="text-block">
              <h3>A Ilusão da Qualidade</h3>
              <p>
                A melhor reabilitação do mundo não vale nada se o doente não a repetir amanhã. 
                A verdadeira questão não é a qualidade clínica, mas sim a consistência.
              </p>
            </div>
            
            <div className="text-block">
              <h3>O Risco do Isolamento</h3>
              <p>
                A Braining já oferece inteligência na recuperação com AI + VR, mas a recuperação 
                solitária conduz a <strong>drop-off</strong>, menor adesão e menor <em>stickiness</em> do produto.
              </p>
            </div>

            <div className="text-block conclusion-block">
              <h3>O Foco na Retenção</h3>
              <p>
                Resolver a desistência silenciosa é o próximo grande passo. A reabilitação precisa 
                ser um hábito, não uma obrigação solitária.
              </p>
            </div>
          </div>

          <div className="hero-actions centered-actions">
            <a href="#simulador" className="btn-solid">Experimentar Simulação</a>
          </div>
        </div>
      </section>

      {/* Secção do Método (Layout Natural em Zig-Zag) */}
      <section id="metodo" className="method-section">
        <div className="content-container">
          
          <div className="text-block main-thesis">
            <h2>A Braining não precisa de mais conteúdo. Precisa de um modelo retentor.</h2>
            <p>
              Não estamos a mudar a forma como a reabilitação começa. Estamos a aumentar a probabilidade de ela continuar. 
              A nossa solução é um <strong>modelo de recuperação interoperável de espaço duplo</strong>. Não é apenas 
              multiplayer; oferecemos diferentes salas para diferentes formas de recuperação.
            </p>
          </div>

          <div className="features-organic">
            <div className="feature-item">
              <span className="feature-number">01</span>
              <div>
                <h3>O Ecossistema de Salas</h3>
                <p>
                  O paciente transita do seu espaço individual (<strong>Anchor Room</strong>) para zonas de baixo atrito, como a <strong>Warm-Up Room</strong> e a <strong>Quiet Co-Presence Room</strong> (tarefas comuns sem pressão social). Quando preparado, passa para a <strong>Cooperative Task Room</strong> e vê o seu progresso reconhecido na <strong>Celebration Room</strong>.
                </p>
              </div>
            </div>
            
            <div className="feature-item">
              <span className="feature-number">02</span>
              <div>
                <h3>Interação Assimétrica vs. Assíncrona</h3>
                <p>
                  A interação <strong>assimétrica</strong> permite que pacientes com diferentes graus de recuperação executem exercícios 
                  diferentes e ajustados no mesmo espaço. A interação <strong>assíncrona</strong> permite aos pacientes executar exercícios 
                  colaborativos de forma diferida, respeitando o tempo e fadiga de cada um.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <span className="feature-number">03</span>
              <div>
                <h3>Lógica Económica e Escala</h3>
                <p>
                  A Braining passa a vender uma experiência de recuperação partilhada (modelo biopsicossocial). Isto garante 
                  uma assiduidade mais consistente (maior retenção = maior valor por utilizador) e adiciona uma camada de valor 
                  com baixo custo marginal, pois não exige aumento proporcional de acompanhamento clínico.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secção da Demo (Mantida inalterada conforme o pedido) */}
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
                height: "650px",
                border: "none"
              }}
            />
          </div>
        </div>
        <p className="demo-hint">Interaja com o rato ou toque para explorar o espaço terapêutico.</p>
      </section>

      {/* Footer Simples */}
      <footer className="site-footer">
        <p>Criado pela equipa Binary Beats - Hackathon Braining</p>
      </footer>

    </div>
  );
}