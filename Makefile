# Makefile para entorno de desarrollo

up:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml up -d --build

down:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml down

logs:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml logs -f

restart:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml down
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml up -d --build

ps:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml ps

exec-product:
	docker exec -it product-service sh

exec-inventory:
	docker exec -it inventory-service sh

rebuild-product:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml build product-service
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml up -d product-service

rebuild-inventory:
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml build inventory-service
	docker compose -f docker/docker-compose.yml -f docker/docker-compose.override.yml up -d inventory-service
