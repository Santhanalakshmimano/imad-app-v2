console.log('Loaded!');
//change the text of the main-txt div
var element = document.getElementById('main-text');
element.innerHTML="New Value";
//remove image
var img=document.getElementById('madi');
img.onclick=function(){
    img.style.marginLeft ='100px';
};