var elem = document.getElementById("test");
/*var elem = document.querySelector('test');*/
/*elem.innerHTML="000";*/

/*var newtext = document.createTextNode(”てきす”);
elem.appendChild(newtext);*/

var osVer = "iPhone";
if (navigator.userAgent.indexOf(osVer)>0){
//alert(osVer);
}

var html="<b>BOLD</b>";
var position="afterbegin";
elem.insertAdjacentHTML(position, html);
elem.style.transition = 'opacity 5s';
elem.style.opacity = '0.15';

(function(){
var list = '<li>list</li>';
for(i=0;i<10;i++){
document.getElementById('test').insertAdjacentHTML('beforeend',list);
}
})();

alert("oh1h");

/*var el=document.getElementsByTagName('body')[0];
el.parentNode.insertBefore(newEl, target);*/

//alert("oh4");
/*
var sp1 = document.createElement("span");
sp1.setAttribute("id", "newSpan");
var sp1_content = document.createTextNode("うらうら ");
sp1.appendChild(sp1_content);
var sp2 = document.getElementById("test");
var parentDiv = sp2.parentNode;
// 新しい要素をDOMに sp2 の前に追加します。
parentDiv.insertBefore(sp1, sp2);*/
