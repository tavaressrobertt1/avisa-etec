import './App.css';

function App() {
  return (
    <div className="container-geral">
      {/* Barra Lateral */}
      <nav className="menu-lateral">
        <h2>Menu</h2>
        <h3>Login</h3>
        <h3>Sobre</h3>
        <h3>Contato</h3>
      </nav>

      {/* Lado Direito da Tela */}
      <div className="conteudo-principal">
        <header>
        </header>
        
        <main className="corpo-conteudo">
          <div className="formulario-login">
          <p>Este é o conteúdo principal do aplicativo.</p>
          </div>
          <p>© 2026 CPS | Desenvolvimento: ETEC da Zona Leste</p>
        </main>
      </div>
    </div>
  );
}

export default App;