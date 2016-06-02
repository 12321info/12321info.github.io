alert("51111111oh0h");
//var osVer = "iPhone"; if (navigator.userAgent.indexOf(osVer)>0){alert(osVer);}
/*elem.style.transition = 'opacity 5s';
elem.style.opacity = '0.15';*/

var ar=[[0,"照明","多機能照明","情報を写しだす仕組み"],["テレビ","aa"],
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
["（次）オーディオ","aa","5000"]];
var s0="",s=""; var l=0;
var o=document.getElementById('c');
if(ar[1].length>2) {//末端
alert(ar[1]);
} else {//枝
s0+="<div class='algnC dn1em flrx lsp01 c0'>"+ar[0][2]+"</div><div class='dnward dnw2'>";
var r=window.location.href.split('/');
l=r.length;
var s1=r[l-1],s2="";
var s=s1.substring(0, s1.lastIndexOf(".html"));
var alf="abcdefghijklmnopqrstuvwxyz";
l=ar.length-1;
for(n=0;n<l;n++){
 s2=ar[n+1].length>2?"p"+ar[n+1][2]:s+n<10?n:n<36?alf.charAt(n-10):"-";
 s0+="<a href='"+s2+".html'><span>"+ar[n+1][0]+"</span></a>";
}
l=s1.length-5;
s=l>6?s1.substring(0,l-7)+s1.substring(l-5):"index.html";
s0+="</div><div class='algnC upward upw2'><a href='"+s+".html'>"+ar[0][1]+"</a></div>"
o.insertAdjacentHTML("beforeend",s0);
alert("6h");
}
