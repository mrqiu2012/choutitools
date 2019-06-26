function sayHello() {
    var message = document.createTextNode("wechat:mrqiu2013");
    var out = document.createElement("div");
    out.appendChild(message);
    document.body.appendChild(out);
}
window.onload = sayHello;
