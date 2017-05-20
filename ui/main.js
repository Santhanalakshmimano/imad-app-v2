console.log('Loaded!');
//change the text of the main-txt div
var element = document.getElementById('main-text');
element.innerHTML="New Value";
//remove image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px'
}
img.onclick=function(){
    var interval =setInterval(moveRight,50);
    
};