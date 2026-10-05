import './FormularioLogin.css';

export function FormularioLogin() {
  return (
    <div className="FormularioLogin">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />
        <button type="submit">Entrar        </button>
      </form>
    </div>
  );
}
