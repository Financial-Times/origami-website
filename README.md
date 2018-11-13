
# Origami

This is the source code for the Origami website as well as a place to open up issues on Origami as a whole. Please visit [origami.ft.com] if you're looking for the documentation.

**:warning: WORK IN PROGRESS :warning:**<br/>
This is currently a work in progress, and we're porting across content from the live site piece by piece. The content here is subject to change without notice and you shouldn't consider this the canonical Origami documentation yet.


## Editing this site

This is a rough guide to editing this site, and where the content lives.

### Static pages

Single static pages live in the [`pages` folder](pages). These each have `permalink` frontmatter set to indicate where the rendered page will live on the site. We store them in this folder to avoid cluttering up the root path of the repo.

### Technical documentation pages

The actual documentation for Origami lives in the [`_components`](_components), [`_services`](_services), [`_principles`](_principles), and [`_tutorials`](_tutorials) folders. This should contain an easier-to-digest version of the Origami specification as well as in depth guides on how to use Origami.

### Specification pages

The formal Origami specification lives in the [`_specification` folder](_specification).

### Blog posts

Blog posts live in the [`_posts` folder](_posts) and the file names are prefixed with the post date. Posts can include an `author` frontmatter value to signify who wrote the post, and an array of `tags` which are displayed alongside the post. The `description` frontmatter is particularly important for blog posts as it is displayed as a preview on the blog listing.


## Running locally

You'll need [Ruby], [Bundler] and [Node.js] installed for this.

  1. Install dependencies: `make install`
  2. Build and serve the site: `make serve`
  3. Visit <http://localhost:4000/>



[bundler]: http://bundler.io/
[jekyll]: http://jekyllrb.com/
[node.js]: https://nodejs.org/
[origami.ft.com]: http://origami.ft.com/
[ruby]: https://www.ruby-lang.org/en/
