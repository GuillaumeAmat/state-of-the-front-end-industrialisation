
include utils/help.mk

.DEFAULT_GOAL := help



.PHONY: install
install: ##@Chore Install the project dependencies
	@yarn

.PHONY: upgrade-interactive
upgrade-interactive: ##@Chore Display a wizzard to upgrade the project dependencies
	@yarn upgrade-interactive

.PHONY: format
format: ##@Chore Format the content of the project files
	@yarn format



.PHONY: start
start: ##@Run Start the development server
	@yarn start

.PHONY: build
build: ##@Build Build the production release
	@yarn clean
	@yarn build

.PHONY: export
export: ##@Build Export the presentation into a PDF file
	@yarn export



.PHONY: lint
lint: ##@Lint Run all the lint tasks
	@make lint-js
	@make lint-css
	@make lint-format

.PHONY: lint-js
lint-js: ##@Lint Lint the JS/JSX/JSON files
	@yarn lint-js

.PHONY: lint-css
lint-css: ##@Lint Lint the CSS files and the styled-components
	@yarn lint-css

.PHONY: lint-format
lint-format: ##@Lint Check the code indentation
	@yarn lint-format



.PHONY: test
test: ##@Tests Run the test files
	@yarn test

.PHONY: test-coverage
test-coverage: ##@Tests Run the test files and display the code coverage
	@yarn test-coverage

.PHONY: test-update
test-update: ##@Tests Update the snapshots of the test files
	@yarn test-update
