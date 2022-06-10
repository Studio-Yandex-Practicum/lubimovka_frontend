export SHELL := /bin/bash

build-development:
	docker compose --env-file .env.development -f config/docker/development/docker-compose.yml build

start-development:
	docker compose -f config/docker/development/docker-compose.yml up -d

stop-development:
	docker compose -f config/docker/development/docker-compose.yml down
