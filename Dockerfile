# ---- Build stage (Debian slim, evita problemas de Alpine/musl) ----
FROM node:20-bookworm-slim AS build
WORKDIR /app

# Copia manifests primero para cache
COPY package.json ./
# Copia lock si existe (no falla si no existe en tu repo local)
COPY package-lock.json* ./

# Instala deps (incluye devDependencies porque Vite está en devDependencies)
RUN npm install --no-audit --no-fund

# Copia el resto y build
COPY . .
RUN npm run build

# ---- Runtime stage (nginx) ----
FROM nginx:alpine

# SPA fallback config (React Router)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia el build final
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
