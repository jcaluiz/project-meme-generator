let memeImageContainer = document.querySelector('#meme-image-container');
let textInMeme = document.createElement('p');
// textInMeme.className = 'meme-text';
let memeText = document.querySelector('#meme-text');
memeImageContainer.appendChild(memeText);
memeText.appendChild(textInMeme);
let inputText = document.querySelector('#text-input');
let inputFile = document.querySelector('#meme-insert');


function getImagePreview(event) { //ref: https://youtu.be/_u_GiyTcsjA // vídeo me ajudou muito a solucionar a dificuldade de colocar uma imagem
  let image = URL.createObjectURL(event.target.files[0]);
  let newImg = document.createElement('img');
  newImg.setAttribute('id', 'img-id')
  newImg.src = image;
  newImg.width = '300';
  let elementContainerImg = document.createElement('div');
  elementContainerImg.setAttribute('id', 'meme-image');
  memeImageContainer.appendChild(elementContainerImg);
  elementContainerImg.appendChild(newImg)
}


function textoEmTempoReal () {
  inputText.addEventListener('keyup', function() {
    textInMeme.innerText = inputText.value;
    })
}
textoEmTempoReal();
