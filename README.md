# postcss-z [![Build Status](https://travis-ci.org/AgtLucas/postcss-z.svg?branch=master)](https://travis-ci.org/AgtLucas/postcss-z)
[PostCSS]: https://github.com/postcss/postcss
A PostCSS plugin to replace z with z-index.

## Example

Input:
```css
.blackbriar {
  z: 1;
}
```

Output:
```css
.blackbriar {
  z-index: 1;
}
```

## Usage
Install:
```
npm i -D postcss-z
```

Then include the plugin:
```js
postcss([require('postcss-z')(options)])
```

See [PostCSS] docs for examples for your environment.

## Licence

Released under the MIT license.
