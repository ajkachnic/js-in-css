# JS-in-CSS

[Visit the website](https://js-in-css.vercel.app)

React and other JavaScript frameworks have popularized the CSS in JS
approach, but what if we did the reverse? Introducing: *JavaScript in
CSS*

## Get Started

To try JS-in-CSS, add this script tag to your markup

```html
<script src="https://js-in-css.vercel.app/script.js" defer></script>
```

Then, in your CSS, you can write code like this:

```css
h1 {
  content: "console.log('hello world!')"
}
```  

This code will be executed for any DOM element that the selector applies
to. Therefore, it is a good idea to use IDs to avoid the same code
executing multiple times.

Note that since the `content` property is used to store your JavaScript,
JS-in-CSS will not work with pseudo elements (but they're fake anyway)

## Advanced features

### `this` Access

For every JavaScript element that is executed, `this` is bound to a
reference to the DOM object. This means you can write CSS like this:

```css
h1 {
  content: "console.log(this.innerText)"
}
```

Of course, you can change DOM content among other things. *JS-in-CSS
isn't reactive just yet*, so you can't do things like hover events
(we're working on it)

### Setting variables

Since each piece of code is executed in a separate function (and a
separate scope), we need a way to assign global variables. Thankfully,
we can use `window` to do this (*this is really cursed*)

```css
h1 {
  content: "window.header = this"
}
p {
  content: "this.innerText = window.header.innerText"
}
```

### Ordering code

Since the executor recursively travels through the DOM, if you want to
use variables in a later function, put the element that sets them
earlier in the document

## Frequently Asked Questions

### Does this really work?

Yes it does! Check your console ;)

### Why?

That's a quite aggressive question but alright - I was bored.

### How can I contribute to this amazing tool?

You can visit [the GitHub repo](https://github.com/ajkachnic/js-in-css)
