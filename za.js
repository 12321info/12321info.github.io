/*
var osVer = "iPhone";
if (navigator.userAgent.indexOf(osVer)>0){alert(osVer);} else {alert("osV1");}*/

t="最先端見える化";
s="%23最先端見える化 計画%0D%0A～最適キーワードの一極集中～よみがえれネット資源～";
var u=window.location.href;
var r=[
"http://twitter.com/share?text=" + s + "&url=" + u,
"http://line.me/R/msg/text/?" + u + "%0d%0a" + s,
"http://www.facebook.com/sharer/sharer.php?u=" + u + "&t=" + s,
"http://plus.google.com/share?url=" + u,
"http://www.linkedin.com/shareArticle?mini=true&url=" + u + "&title=" + s,
"http://pinterest.com/pin/create/button/?url=" + u + "&description=" + s,
"http://b.hatena.ne.jp/add?mode=confirm&url=" + u + "&title=" + s];
var el = document.getElementsByClassName("socialCss");
/*for(i=1;i<7;i++){
el[i].addEventListener("click",function(){
alert("oh2h"+r[i]);
window.location.href=r[i];
},false);//need false!
}*/
//alert("o"+r[0]);

el[0].addEventListener("click",function(){
window.location.href=r[0];
},false);
el[1].addEventListener("click",function(){
window.location.href=r[1];
},false);
el[2].addEventListener("click",function(){
window.location.href=r[2];
},false);
el[3].addEventListener("click",function(){
window.location.href=r[3];
},false);
el[4].addEventListener("click",function(){
window.location.href=r[4];
},false);
el[5].addEventListener("click",function(){
window.location.href=r[5];
},false);
el[6].addEventListener("click",function(){
window.location.href=r[6];
},false);

/*
var el = document.getElementsByClassName("socialCss")[0];
el.style.transition = 'opacity 5s';
el.style.opacity = '0.15';
el.addEventListener("click",function(){
alert("oh12221h");
},false);//need false!
*/

//alert("oh5 "+r[0]);
