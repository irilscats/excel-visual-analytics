.PHONY: api web test
api:
	cd apps/api && uvicorn app.main:app --reload --port 8000
web:
	pnpm dev:web
test:
	cd apps/api && pytest
