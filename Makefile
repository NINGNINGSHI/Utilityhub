COMMANDS := $(MAKEFILE_LIST)

migration-migrate: ## Exécution des migrations
	@echo "→ \033[1mMIGRATION MIGRATE\033[0m --------------------"
	@docker-compose exec python manage.py migrate || (echo "\033[31mx MIGRATE ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mMIGRATION MIGRATE\033[0m --------------------"

migration-create: ## Création d'une migration
	@echo "→ \033[1mMIGRATION CREATE\033[0m --------------------"
	@docker-compose exec python manage.py ma kemigrations || (echo "\033[31mx MIGRATE ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mMIGRATION CREATE\033[0m --------------------"

run-bash: ## Lancer le bash de python
	@echo "→ \033[1mBASH\033[0m --------------------"
	@docker-compose run --rm web bash || (echo "\033[31mx RUN BASH ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mBASH\033[0m --------------------"

build: ## Build docker and run container
	@echo "→ \033[1mCONTAINER\033[0m --------------------"
	@docker-compose up --build || (echo "\033[31mx CONTAINER ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mCONTAINER\033[0m --------------------"

run-web: ## Lancer le serveur web
	@echo "→ \033[1mRUN WEB SERVER\033[0m --------------------"
	@docker-compose up web || (echo "\033[31mx RUN WEB SERVER ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mRUN WEB SERVER\033[0m --------------------"

build-web:
	@echo "→ \033[1mBUILD WEB\033[0m --------------------"
	@npm run watch || (echo "\033[31mx RUN WEB SERVER ERROR\033[0m" && exit 1)
	@echo "✓ \033[1mBUILD WEB\033[0m --------------------"
