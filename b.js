var o=document.getElementById("b");
var s0="<div class='algnC title'><a class='up2em xbd c1' href=''>近未来のキーワード</a></div><form method='POST' class='algnR dn1em' name='formjs0' onsubmit='return onsub0()'><input name='txbx0' placeholder='' type='text' class='algnR ipt'/><input value='検 索' type='submit' class='sbt'/></form>";

var ar=window.location.href.split('/');
var l=ar.length;
var s=ar[l-1];
var c0=s.substring(1, s.lastIndexOf(".html"))-0, c1=c0%10;
s=ar[l-2];
s=s.substring(0,2)+"tz"+s.substring(5);
if (c1>5) c1++;
var f = c0+s.charAt(c1)+'.js';
var e = document.createElement('script'); e.src = f; e.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild (e);

o.insertAdjacentHTML("beforeend",s0);
o=document.getElementById("d");
var s0="3";
o.insertAdjacentHTML("beforeend",s0);

function onsub0(){
var v=document.formjs0.txbx0.value;
location.href="https://www.google.co.jp/search?q=site:https://how20xx.com "+v;
return false;}
