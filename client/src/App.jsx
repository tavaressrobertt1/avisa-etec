import './App.css';
import { BarraLateral } from './components/BarraLateral/BarraLateral';
import { FormularioLogin } from './components/FormularioLogin/FormularioLogin';

function App() {
  return (
    <div className="body-container">
      <BarraLateral />
      <div className="menu-container">
        <header>
          <h1>Bem-vindo ao Aplicativo</h1>
        </header>

        <main className="conteudo">
          <FormularioLogin />
          <p>Este é o conteúdo principal do aplicativo.</p>
        </main>
        <footer>
          <p>© 2026 CPS | Desenvolvimento: ETEC da Zona Leste</p>
        </footer>
      </div>
    </div>
  );
}

export default App;