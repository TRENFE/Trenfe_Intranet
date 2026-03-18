# Trenfe Intranet

Panel interno de administración (Fresh 2 + Vite) para gestionar noticias,
billetes y usuarios.

## Stack

- Fresh 2
- Preact
- Typescript

## Estructura

- `main.ts`: endpoints `/api/*` para administración.
- `routes/(index)/index.tsx`: login intranet.
- `routes/(main)/*`: dashboard y panel de usuarios/noticias/tickets.

## Variables de entorno

```env
EMAIL=
PASSWORD=
```

## Preparación (importante)

```bash
npm install; deno install
```

## Ejecución

```bash
deno task build
deno task start
```

## Endpoints API internos (`main.ts`)

### Auth

- `POST /api/login`
- `GET /api/logout`

### Noticias

- `GET /api/news`
- `POST /api/news`
- `PUT /api/news`
- `DELETE /api/news`

### Tickets

- `GET /api/tickets`
- `POST /api/tickets`
- `PUT /api/tickets`
- `DELETE /api/tickets`

### Usuarios

- `GET /api/users`
- `POST /api/users`
- `PUT /api/users`
- `DELETE /api/users`
- `POST /api/hash`

## Rutas web

- `/` (login)
- `/dashboard`
- `/news`
- `/tickets`
- `/user`

## Seguridad

- Sesión por cookie.
- Middleware de acceso para rutas privadas.
