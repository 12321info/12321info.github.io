alert("51111111oh0h");
var elem = document.getElementById("c");
/*var elem = document.querySelector('test');*/
/*elem.innerHTML="000";*/

/*var newtext = document.createTextNode(”てきす”);
elem.appendChild(newtext);*/

var osVer = "iPhone";
if (navigator.userAgent.indexOf(osVer)>0){
//alert(osVer);
}
console.log("ddd");
alert("0h");

var ar=[[0,"照明","多機能照明","情報を写しだす仕組み"],
["テレビ","aa"],
["視聴端末","aa"],
["録画機","aa"],
["ゲーム機","aa"],
["プロジェクター","aa"],
["立体映像","aa"],
["壁表示","aa"],
["鏡表示","aa"],
["窓表示","aa"],
["（ネットワークカメラ）","aa"],
["（PC用モニター）","aa"],
["（次）オーディオ","aa"]];

var s0="",s=""; var l=0;
var o=document.getElementsById('c');

if(ar[1].length>2) {//末端
console.log(ar[1]);

} else {//枝
console.log(ar[0]);

s0+="div class='algnC dn1em flrx lsp01 c0'>"+ar[0][2]+"</div><div class="dnward dnw2">";
var r=window.location.href.split('/');
console.log(r);
l=r.length;
var s1=r[l-1];
var s=s1.substring(0, s1.lastIndexOf(".html"));
console.log(s);
var alf="abcdefghijklmnopqrstuvwxyz";
l=ar.length-1;
for(n=0;n<l;n++){
 n=n<10?n:n<36?alf.charAt(n-10):'-';
 console.log("n="+n);
 s0+="<a href='"+s+n+".html'><span>"+ar[n+1][0]+"</span></a>";
}
l=s1.length-5;
s=l>6?s1.substring(0,l-7)+s1.substring(l-5):"index.html";
s0+="</div><div class='algnC upward upw2'><a href='"+s+".html'>"+ar[0][1]+"</a></div>"
o.insertAdjacentHTML("beforeend",s0);
console.log("n555="+s);
}

var html="<b>BOLD</b>";
var position="afterbegin";
elem.insertAdjacentHTML(position, html);
elem.style.transition = 'opacity 5s';
elem.style.opacity = '0.15';

(function(){
var list = '<li>list</li>';
for(i=0;i<10;i++){
elem.insertAdjacentHTML('beforeend',list);
}
})();

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
