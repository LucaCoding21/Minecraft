let openbtn = document.getElementById('open-btn');
let modelContainer = document.getElementById('model-container');
let closeBtn = document.getElementById('close-btn');

function openfunc(){
  modelContainer.style.display = 'block';
}
openbtn.addEventListener('click',openfunc)


function closefunc(){
  modelContainer.style.display='none';
}
closeBtn.addEventListener('click',closefunc);
window.addEventListener('click',function(e){
  if(e.target==modelContainer){
    modelContainer.style.display = 'none';
  }
})