const images = [
    "https://cdn.pixabay.com/photo/2025/06/11/13/19/ai-generated-9654480_640.png",
  "https://cdn.pixabay.com/photo/2016/11/11/23/34/cat-1817970_640.jpg",
  "https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_640.jpg",
  "https://cdn.pixabay.com/photo/2020/12/23/17/24/cat-5855647_640.jpg",
  "https://cdn.pixabay.com/photo/2020/03/23/08/45/cat-4959941_640.jpg",
  "https://cdn.pixabay.com/photo/2016/05/05/13/10/young-1373879_640.jpg",
  "https://cdn.pixabay.com/photo/2025/06/11/15/49/ai-generated-9654783_640.png",
  "https://cdn.pixabay.com/photo/2020/03/06/10/55/cat-4906764_640.jpg",
  "https://cdn.pixabay.com/photo/2024/12/29/09/59/cat-9297696_640.jpg",
  "https://cdn.pixabay.com/photo/2017/04/25/14/49/cat-2259890_640.jpg",
  "https://cdn.pixabay.com/photo/2017/12/09/12/34/cat-3007808_640.jpg",
  "https://cdn.pixabay.com/photo/2022/06/06/15/44/cat-7246349_640.jpg",
  "https://cdn.pixabay.com/photo/2017/08/07/13/47/cat-2603978_640.jpg"
];


let mainImage = document.getElementById("card");
let rbtn = document.getElementById("right-btn");
let lbtn = document.getElementById("left-btn");

let arrnum = 0;

// Show initial image
mainImage.innerHTML = `<img src="${images[arrnum]}" alt="" id="image">`;

rbtn.addEventListener('click', function() {
    arrnum = (arrnum + 1) % images.length;
    mainImage.innerHTML = `<img src="${images[arrnum]}" alt="" id="image">`;
});

lbtn.addEventListener('click', function() {
    arrnum = (arrnum - 1 + images.length) % images.length;
    mainImage.innerHTML = `<img src="${images[arrnum]}" alt="" id="image">`;
});
