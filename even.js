

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Submit me"
}	

function myFunction(text){
  document.getElementById('button').innerHTML = text;
}

const button = document.getElementById('button');

button.addEventListener('click',function(){

  myFunction("Hello world!");

});


