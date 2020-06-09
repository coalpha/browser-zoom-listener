# browser-zoom-listener

[![npm version](https://badge.fury.io/js/browser-zoom-listener.svg)](https://badge.fury.io/js/browser-zoom-listener)

```shell
npm install --save browser-zoom-listener
```

[how-to-import](how-to-import.md)

### `browserZoomListener((devicePixelRatio: number) => void): void`

```ts
// like so:
browserZoomListener((dpr: number) => console.log(dpr));
```

Probably also worth noting that the callback is only run at a maximum of once
per frame.

![](example/example.png)

[https://coalpha.github.io/browser-zoom-listener/example/](https://coalpha.github.io/browser-zoom-listener/example/)
