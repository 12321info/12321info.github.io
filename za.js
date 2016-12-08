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

/*s="「最先端見える化」計画";
var u=window.location.href;
var r=[
'"http://twitter.com/share?text=" + s + "&url=" + u;',
'"http://line.me/R/msg/text/?" + u + "%0d%0a" + s',
'"http://www.facebook.com/sharer/sharer.php?u=" + u + "&t=" + s',
'"http://plus.google.com/share?url=" + u',
'"http://www.linkedin.com/shareArticle?mini=true&url=" + u + "&title=" + s',
'"http://pinterest.com/pin/create/button/?url=" + u + "&description=" + s',
'"http://b.hatena.ne.jp/add?mode=confirm&url=" + u + "&title=" + s'];*/

/*var el = document.getElementsByClassName("socialCss");
for(i=0;i<7;i++){
el[i].addEventListener("click",function(){
alert("oh12221h");
},false);//need false!
}*/

var el = document.getElementsByClassName("socialCss")[0];
el.style.transition = 'opacity 5s';
el.style.opacity = '0.15';
el.addEventListener("click",function(){
alert("oh12221h");
},false);//need false!

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

