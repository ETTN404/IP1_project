// const itemsArray = [];
const imageInput = document.getElementById('imageinput');
const upload = document.getElementById('uploadButton');
const discription = document.getElementById('discription');
const mytitle = document.getElementById('title');
const mymoney = document.getElementById('specifymoney');
const instructor = document.getElementById('instructor');
upload.addEventListener('click', () => {
  const image = imageInput.files[0];
  // console.log(image);
  const disc = discription.value;
  const inst = instructor.value;
  const title = mytitle.value;
  const money = mymoney.value;
  const inputObject = {
    image,
    title,
    money,
    disc,
    inst,
  };

  let myArray = JSON.parse(localStorage.getItem('myArray')) || [];
  myArray.push(inputObject);
  myArray.forEach((element) => {
    console.log(element);
  });
  localStorage.setItem('myArray', JSON.stringify(myArray));
  // const myA = JSON.parse(localStorage.getItem('myArray'));
  // myA.forEach((element) => {
  //   console.log(element);
  // });
});
// const file = imageInput.files[0];
// const TITLE = title.value;
// const MONEY = money.value;
// if ((file, TITLE, MONEY)) {
//   console.log(file);
// console.log(file.type);
// console.log(file.size);
// const fileReader = new FileReader();
// fileReader.onload = () => {
//   const info = {
//     image: fileReader.result,
//     description: TITLE,
//     money: MONEY,
//   };

// localStorage.setItem('imageData', fileReader.result);
//     console.log(info);
//   };
//   fileReader.readAsDataURL(file);
//   console.log(fileReader);
// }
// });
function cleanstorage() {
  localStorage.clear();
}

// // let imageArray = [];
// const fileInput = document.getElementById('imageinput');
// console.log(fileInput);
// const uploadbutton = document.getElementById('uploadButton');
// uploadbutton.addEventListener(
//   ('click',
//   (event) => {
//     function uploadImage() {
//       const file = fileInput.files[0];
//       if (file) {
//         const reader = new FileReader();
//         reader.onload = () => {
//           const binaryString = reader.result;
//           localStorage.setItem('myImage', binaryString);
//           console.log('image stored inside local storage');
//           reader.readAsBinaryString(file);
//         };
//       } else {
//         console.log('fuck you');
//       }
//       // localStorage.setItem('SharedImage', file);
//     }
//   })
// );

// function navigateTopage2() {
//   // window.location.href = '../home/home.html';
// }
// // const uploadbutton = document.getElementById('uploadButton');
// // let imageGallery;
// // imageInput.addEventListener(('input',(event)=>{
// //   const file=event.target.files[0];
// //   const photoData=URL.createObjectURL(file);
// //   localStorage.setItem('photoData',photoData);
// //   window.location.href=''
// // }))

// // uploadbutton.addEventListener('click', () => {
// //   // const file=event.target.files[0];
// //   // uploadImage();
// //   //   console.log('button got clicked');
// // });
// // // document.addEventListener('DOMContentLoaded', () => {});

// // function uploadImage() {

// //   //   imageGallery = document.getElementById('imageinput');
// //   //   console.log('uploadimage');
// //   //   const file = imageInput.files[0];
// //   //   if (file) {
// //   //     imageArray.push(file);
// //   //     displayImages();
// //   //   }
// //   //   console.log(imageArray);
// // }
// // function displayImages() {
// //   if (imageGallery) {
// //     const div = document.getElementById('thumbnail');

// //     imageGallery.innerHTML = '';
// //     // while (imageGallery.firstChild) {
// //     //   imageGallery.removeChild(imageGallery.firstChil);
// //     // }
// //     for (let i = 0; i < imageArray.length; i++) {
// //       const file = imageArray[i];
// //       const img = document.createElement('img');
// //       img.src = URL.createObjectURL(file);
// //       img.alt = file.name;
// //       // img.style.maxWidth = '200px';
// //       // img.style.margin = '10px';
// //       div.appendChild(img);
// //     }
// //   } else {
// //     console.error('imageGallary element not found');
// //   }
// // }
