console.log("delay000");
//alert("delay000");
var ar=[[0,"　上　","家の照明",""],["多機能","6./C"],["性能","837W/L31"],["ルームライト","Y6X7IIA.51N9"],["映像　＞","IUMT74.51N9","001"]]

var o=document.getElementsByClassName("dnward dnw2")[0];

var r=["xxxx","zp000.html"];/*window.location.href.split("/");*/

  var l=r.length;var s="",s0="",s1=r[l-1];
  if(ar[1].length>3){var f=ar[1][3]-0;l=ar.length-1-f-1;
  s0+="<div class='algnC flrx lsp01 c0'>"+ar[0][2]+"</div><div class='algnC dn2em fsr xbd c0'>"+ar[0][3]+"</div><div class='algnC dn1em lh25 btn'>";
for(n=0;n<l;n++){
if(n>1&&ar[n+1].length>3){s0+="<a href='p"+ar[n+1][3]+".html'>"+ar[n+1][0]+"</a> "}
else{s=ar[n+1][1];s0+="<a href='https://www.google.co.jp/search?q="+(s.length<1?ar[n+1][0]:s)+"&tbm=nws'>"+ar[n+1][0]+"</a> "}
}
if(f>0){s0+="</div><div class='algnC dn1em lh25 btn'><span class='lsp03 xbd'>代表：</span>";
for(n=0;n<f;n++){
if(ar[n+1+l].length<2){s0+="<a href='"+ar[n+1+l][0]+"' class='ka'>- 価 -</a> "}
else{s=ar[n+1+l][1];s0+="<a href='https://www.google.co.jp/search?q="+(s.length<1?ar[n+1+l][0]:s)+"&tbm=nws'>"+ar[n+1+l][0]+"</a> "}}}var i0=ar[0][4].length;
if(i0){s0+="</div><div class='flL btn'>";if(ar[0][4][0].length){s0+="&nbsp&nbsp<a href='"+ar[0][4][0]+"'>- 例 -</a>"}
  if(ar[0][4][1].length){s0+="&nbsp&nbsp<a href='"+ar[0][4][1]+"'>- 音 -</a>"}}l=l+f+1;}
else{s0+="<div class='algnC flrx lsp01 c0'>"+ar[0][2]+"</div><div class='algnC dn2em fsr xbd c0'>"+ar[0][3]+"</div><div class='dnward dnw2'>";
s=s1.substring(0,s1.lastIndexOf(".html"));
var alf="abcdefghijklmnopqrstuvwxyz";var x=0,y=0;var s2="";l=ar.length-2;for(n=0;n<l;n++){y=ar[n+1].length>2?1:0;
s2=y?"p"+ar[n+1][2]:s+(x<10?x:x<36?alf.charAt(x-10):"-");
  s0+="<a id='"+s2+"'><span>"+ar[n+1][0]+"</span></a>";if(!y){x++}}l++;}
  s0+="aaaaaaa</div><div class='algnR dn-1em dnward dnw2 fsr'><a href='p"+ar[l][2]+".html' class='sdward'><span>"+ar[l][0]+"</span></a>";
  l=s1.length;s=l>7?s1.substring(0,l-6)+s1.substring(l-5):"/";
  s0+="</div><div class='algnC upward upw2'><a href='"+s+"'>"+ar[0][1]+"</a></div>";
o.insertAdjacentHTML("beforeend",s0);
