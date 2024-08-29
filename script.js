//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

document.getElementById('download-images-button').addEventListener('click', function() {
  let imageUrls = [{ url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" }];

  let imagePromises = imageUrls.map(url => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.onload = () => resolve(img);
      img.onerror = () => reject(`Failed to load image's URL: ${url}`);
    });
  });

  Promise.all(imagePromises)
    .then(images => {
      let output = document.getElementById('output');
      images.forEach(img => output.appendChild(img));
    })
    .catch(error => console.error(error));
});

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
