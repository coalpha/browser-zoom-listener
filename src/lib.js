const fns = [];
var fnslen = 0;
var queued = false;
var lastdpr = window.devicePixelRatio;

function resize() {
   if (!queued) {
      window.requestAnimationFrame(dispatch);
   }
}

function dispatch() {
   const dpr = window.devicePixelRatio;
   if (dpr !== lastdpr) {
      for (var i = 0; i < (fnslen|0); i = ((i|0) + 1)|0) {
         fns[i|0](dpr);
      }
      lastdpr = dpr;
   }
   queued = false;
}

window.addEventListener("resize", resize);

export default function listen(fn) {
   fns.push(fn);
   fnslen = (fnslen + 1)|0;
}
