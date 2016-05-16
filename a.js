alert("oh0a");
var elem = document.getElementById("test");
elem.innerHTML = "調整中です000";

var html = '<b>BOLD</b>';
var position = 'afterbegin';
elem.insertAdjacentHTML(position, html);


/*var el=document.getElementsByTagName('body')[0];
el.parentNode.insertBefore(newEl, target);*/

alert("oh1a");

var sp1 = document.createElement("span");
sp1.setAttribute("id", "newSpan");
var sp1_content = document.createTextNode("This is a new span element. ");
sp1.appendChild(sp1_content);
var sp2 = document.getElementById("test");
var parentDiv = sp2.parentNode;
// 新しい要素をDOMに sp2 の前に追加します。
parentDiv.insertBefore(sp1, sp2);
