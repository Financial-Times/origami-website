
HOST = localhost:4000

# Install dependencies
install:
	@echo "Installing dependencies"
	@bundle install

# Build the site
build:
	@echo "Building site"
	@bundle exec jekyll build

# Watch the site for changes, then build
watch:
	@echo "Watching and building site"
	@bundle exec jekyll build --watch --drafts

# Serve the site
serve:
	@echo "Serving site"
	@bundle exec jekyll serve --watch --drafts

# Run pa11y against the site
test:
	@echo "Testing site"
	@echo '{"defaults":{"concurrency":5}}' > .pa11yci
	@npx pa11y-ci@^2.1.1 --sitemap "http://$(HOST)/sitemap.xml" --sitemap-find "^/" --sitemap-replace "http://$(HOST)/"
