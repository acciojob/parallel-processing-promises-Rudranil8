//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// btn.addEventListener("click", () => {
//     let promises = images.map(image => loadImage(image.url));
//     Promise.all(promises)
//         .then(imgs => {
//             imgs.forEach(img => {
//                 output.appendChild(img);
//             });
//         })
//         .catch(error => console.error(error));
// });

// function loadImage(url) {
//     return new Promise((resolve, reject) => {
//         let img = new Image();
//         img.src = url;
//         img.onload = () => resolve(img);
//         img.onerror = () => reject(new Error(`Failed to load image's URL: ${url}`));
//     });
// }

window.onload = function() {
  const output = document.getElementById("output");
  const btn = document.getElementById("download-images-button");
	const output = document.getElementById(“output”);
const btn = document.getElementById(“download-images-button”);

const images = [
{ url: “https://picsum.photos/id/237/200/300” },
{ url: “https://picsum.photos/id/238/200/300” },
{ url: “https://picsum.photos/id/239/200/300” },
];

btn.addEventListener(“click”, () => {
let promises = images.map(image => loadImage(image.url));
Promise.all(promises)
.then(imgs => {
imgs.forEach(img => {
output.appendChild(img);
});
})
.catch(error => console.error(error));
});

function loadImage(url) {
return new Promise((resolve, reject) => {
let img = new Image();
img.src = url;
img.onload = () => resolve(img);
img.onerror = () => reject(new Error(Failed to load image's URL: ${url}));
});
}
}