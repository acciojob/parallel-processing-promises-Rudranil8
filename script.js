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

  // let imagePromises = imageUrls.map(url => {
  //   return new Promise((resolve, reject) => {
  //     let img = new Image();
  //     img.src = url;
  //     img.onload = () => resolve(img);
  //     img.onerror = () => reject(`Failed to load image's URL: ${url}`);
  //   });
  // });
	let imagePromises = imageUrls.map(image => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = image.url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
  });
});

  Promise.all(imagePromises)
    .then(images => {
      let output = document.getElementById('output');
      images.forEach(img => output.appendChild(img));
    })
    .catch(error => console.error(error));
});