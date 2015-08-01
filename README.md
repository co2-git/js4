js4
===

Write CSS with ES6 JavaScript.

# Install

```bash
npm install -g js4 # may require sudo
```

# Usage

Write your CSS in JS in a file, for example `css.js`:

```js
new Rule('body', { color : 'red' });

new Rule('#id, .class > [attr]', { 'text-align' : 'center' });
```

Then compile it from terminal:

```bash
js4 css.js
```

Outputs:

```css
body {
  color: red;
}

#id, .class > [attr] {
  text-align: center;
}
```

To compile to a source file:

```bash
js4 css.js > css.css
```

# Unleash the power of JavaScript

Now you can use JS to do advanced stuff in your CSS such as declarations or scopes:

```js

const COLOR = 'red';

for ( let i = 0; i < 10; i ++ ) {
  new Rule(`#p-${i}`, { color : COLOR, width : `${i * 25}px`  });
}
```

# Mixins

You can use mixin and reusable rules such as:

```js
let reusable = new Rule('.foo', { color : 'red' });

new Rule('.bar', { reusable, 'padding' : '10px' });
```

```css
.foo {
  color: red;
}

.bar {
  color: red;
  padding: 10px;
}
```

If you don't want the mixin to appear on CSS, do like this:

```js
let reusable = new Rule('.foo', { color : 'red' }, { render : false });

new Rule('.bar', { reusable, 'padding' : '10px' });
```
