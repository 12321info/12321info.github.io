alert("oh0g");
/*var elem = document.getElementById("test");*/
var elem = document.querySelector('test');
alert("oh1日");
/*elem.innerHTML="000";*/
alert("oh2");

/*var newtext = document.createTextNode(”てきす”);
elem.appendChild(newtext);*/

var osVer = "iPhone";
if (navigator.userAgent.indexOf(osVer)>0){
    alert(osVer);
}

var html="<b>BOLD</b>";
var position="afterbegin";
alert("oh3");

(function(){
for(i=0;i<10;i++){
document.getElementById('ul02').insertAdjacentHTML('beforeend','ffff');
}
})();

$(function(){
var list = '';
$('button').on('click',function(){
var startTime = new Date();
list = '<li>list</li>';
switch($(this).prop('id')){
case 'bt00':
for(i=0;i<10;i++){list += '<li>list</li>';};
document.getElementById('ul00').innerHTML = list;
break;
case 'bt01':
for(i=0;i<10;i++){document.getElementById('ul01').innerHTML = list;};
break;
case 'bt02':
var startTime = new Date();
/*for(i=0;i<10;i++){
document.getElementById('ul02').insertAdjacentHTML('beforeend',list);
};*/
break;
case 'bt03':
for(i=0;i<10;i++){
$('#ul03').append(list);
};
break;				
};
var endTime = new Date();
console.log(endTime - startTime + "ms");
});
})




/*elem.insertAdjacentHTML(position, html);*/


/*var el=document.getElementsByTagName('body')[0];
el.parentNode.insertBefore(newEl, target);*/

alert("oh4");
/*
var sp1 = document.createElement("span");
sp1.setAttribute("id", "newSpan");
var sp1_content = document.createTextNode("うらうら ");
sp1.appendChild(sp1_content);
var sp2 = document.getElementById("test");
var parentDiv = sp2.parentNode;
// 新しい要素をDOMに sp2 の前に追加します。
parentDiv.insertBefore(sp1, sp2);*/



