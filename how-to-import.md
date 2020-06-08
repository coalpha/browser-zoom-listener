# how-to-import

If you're not familiar with the different ways that you can use JavaScript
modules, I suggest you find an article or a wiki page. There are way more
qualified people that can explain this better than me.

### CommonJS

Node Resolution:

```js
const browserZoomListener = require("browser-zoom-listener");
```

Just a file:

```js
const browserZoomListener = require("./dist/lib.cjs");
```

### ESM

```ts
import browserZoomListener from "./dist/lib.mjs";
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
Just paste it into whatever JS file you need to use it in and you should be able
to use `browserZoomListener`.

Don't worry about licencing because it's free and unencumbered software.
