// <---- Variáveis reutilizáveis ---->

let memeImageContainer = document.querySelector('#meme-image-container');
let textInMeme = document.createElement('p');
let memeText = document.querySelector('#meme-text');
memeImageContainer.appendChild(memeText);
memeText.appendChild(textInMeme);
let inputText = document.querySelector('#text-input');
let inputFile = document.querySelector('#meme-insert');
let newImg = document.createElement('img');
let elementContainerImg = document.createElement('div');
elementContainerImg.setAttribute('id', 'meme-image');

// <---- Funções ---->

function getImagePreview(event) { //ref: https://youtu.be/_u_GiyTcsjA // vídeo me ajudou muito a solucionar a dificuldade de colocar uma imagem
  let image = URL.createObjectURL(event.target.files[0]);
  newImg.setAttribute('id', 'img-id');
  newImg.src = image;
  newImg.width = '300';
  newImg.height = '300';
  memeImageContainer.appendChild(elementContainerImg);
  elementContainerImg.appendChild(newImg);
}


function textoEmTempoReal () {
  inputText.addEventListener('keyup', function() {
    textInMeme.innerText = inputText.value;
    })
}
textoEmTempoReal();

function buttonBorder() {
  let water = document.getElementById('water');
  let fire = document.getElementById('fire');
  let earth = document.getElementById('earth');
  
  fire.style.backgroundColor = 'red';
  water.style.backgroundColor = 'blue';
  earth.style.backgroundColor = 'green';

  fire.addEventListener('click', function() {
    memeImageContainer.style.border = "3px dashed red";
  })

  water.addEventListener('click', function() {
    memeImageContainer.style.border = "blue 5px double";
  })

  earth.addEventListener('click', function() {
    memeImageContainer.style.border = "groove green 6px";
  })
}
buttonBorder();

function memesProntos() {
  let img1 = document.querySelector('#meme-1');
  let img2 = document.querySelector('#meme-2');
  let img3 = document.querySelector('#meme-3');
  let img4 = document.querySelector('#meme-4');
  
  function memes1Prontos() {
    newImg.src = "/imgs/meme1.png";
    newImg.width = '300';
    newImg.height = '300';
    newImg.setAttribute('id', 'meme-image');
    memeImageContainer.appendChild(newImg);
  }
  
  function memes2Prontos() {
    newImg.src = "/imgs/meme2.png";
    newImg.width = '300';
    newImg.height = '300';
    newImg.setAttribute('id', 'meme-image');
    memeImageContainer.appendChild(newImg);
  }
  
  function memes3Prontos() {
    newImg.src = "/imgs/meme3.png"
    newImg.width = '300';
    newImg.height = '300';
    newImg.setAttribute('id', 'meme-image');
    memeImageContainer.appendChild(newImg);
  }
  
  function memes4Prontos() {
    newImg.src = "/imgs/meme4.png";
    newImg.width = '300';
    newImg.height = '300';
    newImg.setAttribute('id', 'meme-image')
    memeImageContainer.appendChild(newImg);
  }
  
  img1.addEventListener('click', memes1Prontos);
  img2.addEventListener('click', memes2Prontos);
  img3.addEventListener('click', memes3Prontos);
  img4.addEventListener('click', memes4Prontos);

}
memesProntos();