/** @type {import("../types/lib.iife")} */

const defaultText = `\
Try zooming the browser.
Note the time of update below.\
`;

function displayOutput(dpr) {
   const normalized_dpr = dpr.toString().padStart(18, " ");
   const date = new Date().toLocaleTimeString().padStart(22, " ");
   c.innerText = `${defaultText}\n\ndevicePixelRatio: ${normalized_dpr}\nLast Updated: ${date}`;
}

displayOutput(devicePixelRatio);

browserZoomListener(displayOutput);
