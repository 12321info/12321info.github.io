function (){
var el=document.getElementsByClassName('color1');
el.style.transition = 'opacity 5s';
el.style.opacity = '0';
el=document.getElementsByTagName('body')[0];

el.parentNode.insertAdjacentHTML("afterbegin","<div id='editing'>調整中です</div>");
}