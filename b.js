var o=document.getElementById("c");
var s0="<div class='algnC title'><a class='up2em xbd c1' href=''>近未来のキーワード</a></div><form method='POST' class='algnR dn1em' name='formjs0' onsubmit='return onsub0()'><input name='txbx0' placeholder='' type='text' class='algnR ipt'/><input value='検 索' type='submit' class='sbt'/></form>";

var ar=window.location.href.split('/');
var l=ar.length;
var s=ar[l-1];
var c0=s.substring(1, s.lastIndexOf(".html")),c1=c0.substr(c0.length-1);
s=ar[l-2];
s=s.substring(0,3)+"tz"+s.substring(5);
if (isNaN(c1)) {c1="z";}
else {if (c1>5) {c1++;} c1=s.charAt(c1);}
var f = c0+c1+".js";
/*alert("s "+s+" c0-"+c0+" c1-"+c1+" f"+f);*/
var e = document.createElement('script'); e.src = f; e.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild (e);

o.insertAdjacentHTML("beforeend",s0);
o=document.getElementById("e");
s0="<div class='algnC up15em dn1em c1'><div class='dnxem lh0'><a href='/'>＝運営協力「○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝</a></div><div class='dnxem lh0'><a href='/'>＝最高協力「○○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝</a></div></div><div class='algnR dn1em upward upw2'><a href='/'>トップページ</a></div><div class='algnR fsr xbd c0'>(c)2015-2016 How20XX All Rights Reserved.</div>";
o.insertAdjacentHTML("beforeend",s0);

function onsub0(){
var v=document.formjs0.txbx0.value;
location.href="https://www.google.co.jp/search?q=site:https://how20xx.com "+v;
return false;}
