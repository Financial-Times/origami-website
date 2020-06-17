---
title: Create A New Origami Component - Part 6 Testing
description: A step-by-step tutorial which teaches you how to build and deploy a new Origami component.
cta: Learn how to create an Origami component
collection_listing_display: false

---

# {{page.title}}

In part six we will add tests to our component. Including tests for Sass, JavaScript, and common accessibility issues.

Run `obt test` to run component tests. RUn `obt verify` to lint code style and check the validity of `origami.json`.

## JavaScript Tests

Origami components JavaScript tests use [mocha](https://mochajs.org/) as a test runner; [sinon](https://sinonjs.org/) for stubs, spies, and mocks; and [proclaim](https://github.com/rowanmanning/proclaim) to make assertions.

To demonstrate how these projects are used to test components we will add a new test to confirm that clicking button in our component increments the count.

JavaScript tests are located under the `tests/js` directory. The file `example.test.js` already has boilerplate tests, which use component markup defined in `tests/js/helpers/fixtures.js` to confirm the `init` method works as expected.

Our first step will be to update the `htmlCode` method in `tests/js/helpers/fixtures.js` with our latest component markup. We'll add an id `id="element"` which we can use in our tests:
```js
function htmlCode () {
	const html = `
        <div id="element" class="o-example" data-o-component="o-example">
            Hello world, I am a component named o-example!
            <span class="o--if-js">
                You have clicked this lovely button <span data-o-example-current-count>0</span> times.
                <button class="o-example__button">count</button>
            <span>
        </div>
	`;
	insert(html);
}
```

Next we can append our new tests within the main `describe("Example", () => {})` block:
```js
describe("with a button", () => {

    beforeEach(() => {
        // Add our component markup to the DOM
        fixtures.htmlCode();
    });

    afterEach(() => {
        // Remove our component markup from the DOM
        fixtures.reset();
    });

    it("should increment the count on click", () => {
        // initialise o-example on fixture markup
        const oExample = Example.init('#element');
        // find and click the button
        const button = document.querySelector('button');
        button.click();
        // confirm the count has incremented
        const actual = oExample.count;
        const expected = 1;
        proclaim.equal(actual, expected, `Expected count to equal ${expected} given a single button click.`);
    });

    it("should display the new count on click", () => {
        // initialise o-example on fixture markup
        Example.init('#element');
        // find and click the button
        const button = document.querySelector('button');
        button.click();
        // confirm the new count is reflected in the DOM
        const countElement = document.querySelector('[data-o-example-current-count]');
        const actual = countElement.textContent;
        const expected = '1';
        proclaim.include(
            actual,
            expected,
            `Expected the new count to display in the component.`
        );
    });
});
```

Now run `obt test`. You should see our new tests are run and pass.

The `obt test --debug` is a useful command to write or debug JavaScript tests. It allows you to run tests in the browser and get feedback in the browsers developer console. The `--browserstack` flag also enables tests to run against multiple browsers at once in [BrowserStack](browserstack.com/). See the [Origami Build Tools documentation](https://github.com/Financial-Times/origami-build-tools) for more details.

## Sass Tests

Component Sass tests are run using the [Oddbird True](https://www.oddbird.net/true/) library. Sass tests for a component are located in the `tests/scss` directory.

This tutorial won't cover Oddbird True in detail, for that see the [Oddbird True documentation](https://www.oddbird.net/true/docs/). However to demonstrate we will update the boilerplate test (`tests/scss/_main.test.scss`) to confirm the `oExample` mixin outputs CSS for the inverse theme by default:

<pre><code class="o-syntax-highlight--scss">@include describe('oExample mixins') {
    // tests for the primary mixin oExample
	@include describe('oExample') {
		@include it('outputs the inverse theme by default') {
			@include assert() {
				// output actual CSS
				@include output() {
					@include oExample();
				}
				// expected output CSS to contain
				@include contains() {
					.o-example--inverse {
						background: #262a33;
						color: #ffffff;
					}
				}
			}
		}
	}
}</code></pre>

Again running `obt test` should so our new tests have run and passed.

