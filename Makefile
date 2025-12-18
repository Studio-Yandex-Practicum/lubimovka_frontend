export SHELL := /bin/bash

ENV := $(PWD)/.env.development

include $(ENV)

build-development:
	docker compose -f config/docker/development/docker-compose.yml build --build-arg BASE_URL=${NEXT_PUBLIC_BASE_URL} --build-arg API_BASE_URL=${NEXT_PUBLIC_API_BASE_URL}

start-development:
	docker compose -f config/docker/development/docker-compose.yml up -d

stop-development:
	docker compose -f config/docker/development/docker-compose.yml down
