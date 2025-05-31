# Retail Cleaning Store – Microservicios & API Gateway

Proyecto profesional de arquitectura de microservicios para una tienda de retail, con enfoque en escalabilidad, seguridad y buenas prácticas modernas.

## 🏗️ Arquitectura
- **Microservicios Node.js/Express**: Productos, inventario, órdenes y precios.
- **API Gateway Kong**: Entrada única, plugins de seguridad y monitoreo.
- **Autenticación JWT**: Integración con Keycloak como Identity Provider (IdP).
- **Rate Limiting**: Protección ante abuso (limitación de requests).
- **CORS**: Acceso seguro desde frontends.
- **Prometheus**: Métricas listas para monitoreo.
- **Docker Compose**: Orquestación local y despliegue reproducible.

## 🚀 Despliegue local rápido
1. **Clona el repo y navega al directorio**
   ```sh
   git clone https://github.com/GuilleFerru/retail_cleaning_store.git
   cd retail_cleaning_store
   ```
2. **Copia y completa las variables de entorno**
   - Crea tus archivos `.env` según los ejemplos (`.env.example`).
   - Nunca subas tus secretos reales.
3. **Levanta los servicios**
   ```sh
   docker compose up -d
   ```
4. **Accede a Keycloak**
   - http://localhost:8080/
   - Usuario/contraseña admin: ver docker-compose.yml
5. **Sincroniza Kong si cambias la config**
   ```sh
   deck sync --kong-addr http://localhost:8001 --state gateway/kong.yml
   ```

## 🔐 Autenticación JWT (Keycloak)
- Crea un usuario en Keycloak y obtén un token JWT:
  ```sh
  curl -X POST "http://localhost:8080/realms/retail-cleaning-store/protocol/openid-connect/token" \
    -H "Content-Type: application/x-www-form-urlencoded" \
    -d "client_id=kong-client" \
    -d "client_secret=TU_CLIENT_SECRET" \
    -d "grant_type=password" \
    -d "username=USUARIO" \
    -d "password=CONTRASEÑA"
  ```
- Usa el token en tus requests:
  ```
  Authorization: Bearer TU_TOKEN
  ```

## 📦 Microservicios incluidos
- **product-service**: /products, /categories, /variations
- **inventory-service**: /inventory
- **order-service**: /orders
- **pricing-service**: /pricing

## 🛡️ Seguridad y buenas prácticas
- **No hay secretos ni claves en el repo** (`.env`, claves, tokens ignorados por .gitignore)
- **Solo JWT**: No se expone API Key en producción
- **Plugins activos**: JWT, rate-limiting, CORS, Prometheus
- **No expongas puertos de microservicios en producción**

## 📊 Monitoreo
- **Prometheus**: Métricas expuestas por Kong en `/metrics`

## 📝 Contribuciones
- Haz fork, crea ramas para features/fixes y abre tu PR.
- Mantén buenas prácticas de seguridad y documentación.

---

**Proyecto para portfolio profesional. Arquitectura lista para escalar y migrar a producción real.**
