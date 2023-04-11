DKC = docker compose

_generate-private-key:
	openssl genrsa -out keys/privateKey.pem 4096

_generate-key:
	openssl req -new -x509 -key keys/privateKey.pem -out keys/certificate.pem -days 365

generate-ssl-certificate: _generate-private-key _generate-key

rebuild:
	$(DKC) build
	$(DKC) up --force-recreate --detach

start:
	$(DKC) up --detach

stop:
	$(DKC) stop

down:
	$(DKC) down

build:
	$(DKC) build
