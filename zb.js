console.log("any9");alert("any11");

var istap = window.ontouchstart===null?"touchend":"click";
var move=0;
if (istap==="touchend"){
document.addEventListener('touchmove',function(e){move=1;});
}
document.addEventListener(istap,function(e) {
if (!move) {console.log("anyi")}
else{console.log("anye");alert("move"); move=0;}
var target = e.target;
if (target.parentNode.id === 'd'){console.log("id d");}
if (target.parentNode.parentNode.id === 'd'){console.log("id d");}
if (target.parentNode.parentNode.parentNode.id === 'd'){console.log("id d");}
if (target.parentNode.id === 'zp00'){
  console.log("zp00");
}
if (target.parentNode.parentNode.className === 'dnward'){console.log("dnward");}
if (target.parentNode.parentNode.className === 'dnward dnw2'){
  console.log("dnward dnw2");
var tpp = target.parentNode.parentNode;
for (var i =tpp.childNodes.length-1; i>=0; i--) {tpp.removeChild(tpp.childNodes[i]);}
  var script = document.createElement("script");
script.src = target.parentNode.id+".js";
document.body.appendChild(script);
console.log("src "+script.src);
}
}, false);

var ar="https://topclear.net/p0.html"/*window.location.href*/.split('/');var l=ar.length;var s1=ar[l-1];
var o=document.getElementById("c");
var s0="<div class='algnC title'><a class='up2em lsp01 xbd c1' href='/'>#最先端見える化<!--span class='fsr lsp01 xbd c0'>近未来のキーワード</span--></a><br></div>"+(document.body.clientWidth<500?"<br /><br /><br /><br />":"<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />")+"<form method='POST' class='algnR dn1em' name='formjs0' onsubmit='return onsub0()'><input name='txbx0' placeholder='' type='text' class='algnR ipt'/><input value='検 索' type='submit' class='sbt'/>　</form><div class='algnL fsr lsp03'>　"+s1.substring(1, s1.lastIndexOf('.html'))+"  </div>";
o.insertAdjacentHTML("beforeend",s0);
/*["＝運営協力「募集中 期間固定枠」様＝","https://google.com","＝最高協力「募集中 ポイント枠」様＝","https://google.co.jp"]*/
var pr=[["＝運営協力「０○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「０○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],
["＝運営協力「１○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「１○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「２○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「２○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「３○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「３○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"],["＝運営協力「４○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○○○○」様＝","https://google.com","＝最高協力「４○○○○○aaaaaaaaaaaaaaaaaaaaaaaaaaa○○」様＝","https://google.co.jp"]];

var c0=s1.substring(1,2);
if (c0>4) c0=4;
o=document.getElementById("e");
s0="<div class='algnC up15em dn1em blk2 c1'><div class='dnxem lh0 blk3'><a href='"+pr[c0][1]+"'>"+pr[c0][0]+"</a></div><div class='dnxem lh0'><a href='"+pr[c0][3]+"'>"+pr[c0][2]+"</a></div><div class='algnC c1'><a href='"+c0+"z.html'>[ ご支援 ]</a></div></div><div class='algnR rt2em dn1em upward upw2'><a href='/'>トップページ</a></div><div class='algnR fsr xbd c0'>(c)2015-2016 topclear.net All Rights Reserved.　</div>";
o.insertAdjacentHTML("beforeend",s0);

function onsub0(){
var v=document.formjs0.txbx0.value;
location.href="https://www.google.co.jp/search?q=site:https://topclear.net "+v;
return false;}
