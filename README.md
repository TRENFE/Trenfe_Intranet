# Trenfe Intranet

Panel interno de administración (Fresh 2 + Vite) para gestionar noticias,
tickets y usuarios.

## Estado actual

- `deno check main.ts`: falla en entorno actual por dependencias npm no
  instaladas (`dotenv`) debido a `nodeModulesDir: manual`.
- Solución: instalar dependencias antes de check/arranque.

## Stack

- Fresh 2
- Preact
- Vite
- Proxy a `Trenfe_BackEnd`

## Estructura

- `main.ts`: endpoints `/api/*` para administración.
- `routes/(index)/index.tsx`: login intranet.
- `routes/(main)/*`: dashboard y CRUD de usuarios/noticias/tickets.

## Variables de entorno

```env
EMAIL=
PASSWORD=
```

## Preparación (importante)

Como usa `"nodeModulesDir": "manual"`, instala dependencias primero:

```bash
npm install
```

## Ejecución

```bash
deno task dev
```

Build + run:

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

- Sesión por cookie de intranet.
- Middleware de acceso para rutas privadas.
