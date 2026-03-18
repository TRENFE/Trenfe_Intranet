import { useEffect, useState } from "preact/hooks";

export default function LoginComponent() {
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(globalThis.location.search);
    const errorParam = params.get("error");
    switch (errorParam) {
      case "credentials":
        setError("Usuario o contraseña incorrectos");
        break;
      case "emptyfields":
        setError("Completa todos los campos");
        break;
      case "server":
        setError("Error del servidor");
        break;
    }
  }, []);

  return (
    <div class="login-container">
      <div class="login-side-panel">
        <p class="eyebrow">Acceso interno</p>
        <h1>TrenFe Intranet</h1>
        <p class="login-copy">
          Gestiona la plataforma si eres empleado interno
        </p>
        <div class="login-highlights">
          <span>Gestion centralizada</span>
          <span>Operaciones en tiempo real</span>
        </div>
      </div>
      <div class="login-box">
        <img
          class="login-logo"
          src="https://cdn-icons-png.flaticon.com/512/8439/8439392.png"
          alt="Logo intranet Trenfe"
        />
        <p class="eyebrow">Bienvenido</p>
        <p class="login-form-copy">
          Inicia sesion con tus credenciales de administrador.
        </p>
        {error && <div class="error-box">{error}</div>}
        <form method="POST" action="/api/login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value="admin@trenfe.com"
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value="trenfeadmin1"
            />
          </div>
          <button type="submit" class="btn btn-primary login-submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}
