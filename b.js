var ar=window.location.href.split('/');var l=ar.length;var s1=ar[l-1];
var o=document.getElementById("c");
var s0="<div class='algnC title'><a class='up2em xbd c1' href=''>近未来のキーワード</a></div>"+(document.body.clientWidth<500?"<br /><br /><br /><br />":"<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />")+"<form method='POST' class='algnR dn1em' name='formjs0' onsubmit='return onsub0()'><input name='txbx0' placeholder='' type='text' class='algnR ipt'/><input value='検 索' type='submit' class='sbt'/></form><div class='algnL fsr lsp03'>　"+s1.substring(1, s1.lastIndexOf('.html'))+"  </div>";
o.insertAdjacentHTML("beforeend",s0);

var pr=[["＝運営協力「０○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「０○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],
["＝運営協力「１○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「１○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「２○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「２○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「３○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「３○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「４○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「４○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"]];

var c0=s1.substring(1,2);
if (c0>4) c0=4;
o=document.getElementById("e");
s0="<div class='algnC up15em dn1em blk2 c1'><div class='dnxem lh0'><a href='"+pr[c0][1]+"'>"+pr[c0][0]+"</a></div><div class='dnxem lh0'><a href='"+pr[c0][3]+"'>"+pr[c0][2]+"</a></div></div><div class='algnR dn1em upward upw2'><a href='/'>トップページ</a></div><div class='algnR fsr xbd c0'>(c)2015-2016 How20XX All Rights Reserved.</div>";
o.insertAdjacentHTML("beforeend",s0);

function onsub0(){
var v=document.formjs0.txbx0.value;
location.href="https://www.google.co.jp/search?q=site:https://how20xx.com "+v;
return false;}
