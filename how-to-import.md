# how-to-import

If you're not familiar with the different ways that you can use JavaScript
modules, I suggest you find an article or a wiki page. There are way more
qualified people that can explain this better than me.

Obviously, this module wasn't meant to be used server side.
If you're using TypeScript or `require`, you're gonna need a bundler like
[rollup](https://github.com/rollup/rollup),
[browserify](https://github.com/browserify/browserify), or
[webpack](https://github.com/webpack/webpack).

### CommonJS

Node resolution:

```js
const browserZoomListener = require("browser-zoom-listener");
```

Just a file:

```js
const browserZoomListener = require("./dist/lib.cjs");
```

### ESM

```js
import browserZoomListener from "./dist/lib.mjs";
```

### TypeScript

[Node resolution:](https://www.staging-typescript.org/docs/handbook/module-resolution.html#node)

```ts
import browserZoomListener from "browser-zoom-listener/lib";
// works without synthetic default export
```

### IIFE

```html
<script src="./dist/lib.iife.js"></script>
<script>
   browserZoomListener;
</script>
```

### The Fast Way

Copy the stuff in [this file](dist/lib.iife.js).
It's one big expression that goes into `browserZoomListener`.

Don't worry about licencing because it's free and unencumbered software.
