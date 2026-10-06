import './FormularioLogin.css';

export function FormularioLogin() {
  return (
    <div className="FormularioLogin">
      <img src="avisaetec-logo6.png" alt="Logo AvisaETEC" />
      <h2>
        <img
          src="cadeado-flaticon.png"
          alt="FlatIcon"
          className="cadeado-flaticon"
        />
        Login
      </h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="senha">Senha:</label>
        <input type="password" id="senha" name="senha" required />

        <button type="submit">Entrar</button>
        <p>Primeiro Acesso</p>
        <p>Esqueceu a Senha?</p>
      </form>
    </div>
  );
}
