console.log("delay11");
//alert("delay1");
var ar=[
[0,"　上　","家（いえ）",""],["照明","Y0PO3PS082F.2X4"],["映像","ERUDE9TA71CE-"],["オーディオ","/Q2CPP36.NM9QTQ"],["家電","5UHXK7DLIPL"],["新！家電","ENXC53AO"],["家具","ULJMX/33"],["キッチン","J7527"],["水まわり","0FK1G-W-A2-78"],["子供","5RX6M"],["ペット","VW9812INT3R8.."],["植物","Z1-G133/UTR"],["小物","47U28-GMSW1"],["設備","-75R69BZ6"],["構造","FO5R7"],["街（まち）　＞","./S2W3U8","01"]
];
var o=document.getElementsByClassName("dnward dnw2")[0];var r=["xxxx","zp00.html"];/*window.location.href.split("/");*/
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
