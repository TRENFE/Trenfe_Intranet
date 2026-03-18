

const Header = () => {
    return(
        <nav class="navbar">
        <div class="nav-brand">
          <span class="nav-badge">TRENFE</span>
          <span>Intranet</span>
        </div>
        <div class="nav-links">
          <a href="https://dashboard.stripe.com/" target="_blank">Stripe</a>
          <a href="/user">Usuarios</a>
          <a href="/news">Noticias</a>
          <a href="/tickets">Billetes</a>
          <a href="/api/logout" class="nav-logout">
            Cerrar Sesión
          </a>
        </div>
      </nav>
    )
}

export default Header;