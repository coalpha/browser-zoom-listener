type NumberConsumer = (dpr: number) => void;

let lastdpr = window.devicePixelRatio;
const fns: NumberConsumer[] = [];
let queued = false;

function resize() {
   if (!queued) {
      window.requestAnimationFrame(dispatch);
   }
}

function dispatch() {
   const dpr = window.devicePixelRatio;
   if (dpr !== lastdpr) {
      for (var i = 0; i < fns.length; i++) {
         fns[i](dpr);
      }
      lastdpr = dpr;
   }
   queued = false;
}

window.addEventListener("resize", resize);

export default function listen(fn: NumberConsumer) {
   fns.push(fn);
}
