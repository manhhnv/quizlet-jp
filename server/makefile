generatetype:
	node_modules/ts-node/dist/bin.js src/generate-typings/generate-typing.ts

migrations:
	npx typeorm migration:generate -n temp
	yarn build
	npx typeorm migration:run