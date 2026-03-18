export default function Dashboard() {
  return (
    <div>
      
      <div class="container">
        <section class="dashboard-hero">
          <div>
            <h1>Gestion interna</h1>
            <p class="hero-copy">
              Administra usuarios, noticias y billetes
            </p>
          </div>
          <div class="hero-panel">
            <div class="hero-stat">
              <strong>Seguridad</strong>
              <span>Control de acceso (MFA Proximamente)</span>
            </div>
            <div class="hero-stat">
              <strong>Ventas</strong>
              <span>Integracion con Stripe</span>
            </div>
            <div class="hero-stat">
              <strong>Seguimiento</strong>
              <span>Gestion precisa de usuarios</span>
            </div>
          </div>
        </section>
        <div class="dashboard-grid">
          <div class="dashboard-card">
            <div class="card-icon">U</div>
            <h2>Usuarios</h2>
            <p>Gestiona los usuarios del sistema</p>
            <a href="/user" class="btn btn-primary">Ir a Usuarios</a>
          </div>
          <div class="dashboard-card">
            <div class="card-icon">N</div>
            <h2>Noticias</h2>
            <p>Gestiona las noticias del sistema</p>
            <a href="/news" class="btn btn-primary">Ir a Noticias</a>
          </div>
          <div class="dashboard-card">
            <div class="card-icon">T</div>
            <h2>Billetes</h2>
            <p>Gestiona los billetes del sistema</p>
            <a href="/tickets" class="btn btn-primary">Ir a Tickets</a>
          </div>
        </div>
      </div>
    </div>
  );
}
