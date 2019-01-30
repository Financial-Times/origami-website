
SITEMAP = "http://localhost:4000/sitemap.xml"

# Install dependencies
install:
	@echo "Installing dependencies"
	@bundle install && bundle clean

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
ifneq ("$(wildcard /usr/bin/google-chrome)","")
	@\
		PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
		PA11Y_CHROMIUM_PATH=/usr/bin/google-chrome \
		npx pa11y-ci@^2.1.1 --sitemap $(SITEMAP)
else
	@npx pa11y-ci@^2.1.1 --sitemap $(SITEMAP)
endif

# Fetch component data for use in the site
fetch-component-data:
	@echo "Fetching component data"
	@curl -s -H 'X-Api-Key: $(REPO_DATA_API_KEY)' -H 'X-Api-Secret: $(REPO_DATA_API_SECRET)' 'https://origami-repo-data.ft.com/v1/repos' \
		| ./scripts/extract-components.js \
		> _data/components.json

# Generate a newsletter email for review
email-generate:
	@./scripts/email-newsletter.js

# Generate and send a newsletter email
email-generate-and-send:
	@./scripts/email-newsletter.js --send
