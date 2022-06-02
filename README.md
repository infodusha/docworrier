# DocWorrier
Client-server app that worries about documents

## Deploy guide
1. Build frontend: `cd dw-front && npm ci && npm run build`
2. Build backend: `cd dw_backend && dart pub get && conduit build`
3. Run migrations on _postgresql_
4. Configure & serve
