/*var ar=[[0,"照明","多機能照明","情報を写しだす仕組み"],
["テレビ","aa"],
["視聴端末","aa"],
["録画機","aa"],
["ゲーム機","aa"],
["プロジェクター","aa"],
["立体映像","aa"],
["壁表示","aa","5000"],
["鏡表示","aa"],
["窓表示","aa"],
["（ネットワークカメラ）","aa"],
["（PC用モニター）","aa","5000"],
["（次）オーディオ","aa"]];*/

var ar=[[0,"照明","多機能照明","情報を写しだす仕組み",["http://matome","http://soundc"]],
["テレビ","テ|レビ","","3"],
["視聴端末","",""],
["録画機","録|画",""],
["ゲーム機","",""],
["プロジェクター","",""],
["立体映像","",""],
["壁表示","",""],
["鏡表示","",""],
["窓表示","",""],
["（ネットワークカメラ）","",""],
["（PC用モニター）","",""],
["http://www.amazon.co.jp/gp/product/B00N0ISSHQ/?ie=UTF8&amp;link_code=as3&amp;tag=satmgzrnt-22"],
["（次）オーディオ","","gigiu"]];

var o=document.getElementById('d');
var r=window.location.href.split('/');
var l=r.length;
var s="",s0="",s1=r[l-1];

if(ar[1].length>3) {
var f=ar[1][3]-0;
l=ar.length-1-f;
s0+="<div class='algnC flrx lsp01 c0'>"+ar[0][2]+"</div><div class='algnC dn2em fsr xbd c0'>"+ar[0][3]+"</div><div class='algnC dn1em lh25 btn'>";
for(n=0;n<l;n++){
s=ar[n+1][1];
s0+="<a href='https://www.google.co.jp/search?q="+(s.length<1?ar[n+1][0]:s)+"&tbm=nws'>"+ar[n+1][0]+"</a> ";
}
if (f>0) {
s0+="</div><div class='algnC dn1em lh25 btn'><span class='lsp03 xbd'>代表：</span>";
for(n=0;n<f;n++){
if (ar[n+1+l].length<2) {
s0+="<a href='"+ar[n+1+l][0]+"' class='ka'>- 価 -</a> ";
} else {
s=ar[n+1+l][1];
s0+="<a href='https://www.google.co.jp/search?q="+(s.length<1?ar[n+1+l][0]:s)+"&tbm=nws'>"+ar[n+1+l][0]+"</a> ";
}
}

}
var i0=ar[0][4].length; if (i0) {
s0+="</div><div class='algnR dn1em btn'>";
if (ar[0][4][0].length) {s0+="<a href='"+ar[0][4][0]+"'>- 例 -</a>";}
if (ar[0][4][1].length) {s0+="&nbsp&nbsp<a href='"+ar[0][4][1]+"'>- 音 -</a>";}
}

} else {

s0+="<div class='algnC flrx lsp01 c0'>"+ar[0][2]+"</div><div class='algnC dn2em fsr xbd c0'>"+ar[0][3]+"</div><div class='dnward dnw2'>";
s=s1.substring(0, s1.lastIndexOf(".html"));
var alf="abcdefghijklmnopqrstuvwxyz";
var x=0,y=0; var s2="";
l=ar.length-1;
for(n=0;n<l;n++){
y=ar[n+1].length>2?1:0;
s2=y?"p"+ar[n+1][2]:s+(x<10?x:x<36?alf.charAt(x-10):"-");
s0+="<a href='"+s2+".html'"+(y?" class='sdward'":"")+"><span>"+ar[n+1][0]+"</span></a>";
if (!y) x++;
}
}
l=s1.length;
s=l>7?s1.substring(0,l-6)+s1.substring(l-5):"index.html";
s0+="</div><div class='algnC upward upw2'><a href='"+s+"'>"+ar[0][1]+"</a></div>"
o.insertAdjacentHTML("beforeend",s0);
