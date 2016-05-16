alert("oh0d");
var elem = document.getElementById("test");
alert("oh1日");
/*elem.innerHTML="000";*/
alert("oh2");

/*var newtext = document.createTextNode(”てきす”);
elem.appendChild(newtext);*/

var html = '<b>BOLD</b>';
var position = 'afterbegin';
elem.insertAdjacentHTML(position, html);


/*var el=document.getElementsByTagName('body')[0];
el.parentNode.insertBefore(newEl, target);*/

alert("oh3");

var sp1 = document.createElement("span");
sp1.setAttribute("id", "newSpan");
var sp1_content = document.createTextNode("うらうら ");
sp1.appendChild(sp1_content);
var sp2 = document.getElementById("test");
var parentDiv = sp2.parentNode;
// 新しい要素をDOMに sp2 の前に追加します。
parentDiv.insertBefore(sp1, sp2);
