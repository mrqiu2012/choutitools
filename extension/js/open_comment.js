//test
function open_comment(now_href) {
    $("#iframe").remove();
    var iframe_content = "<iframe scrolling='no' id='iframe' frameborder='0' class='g-iframe' src='https://dig.chouti.com/link/26614481?mark=true' style='width: 840px;padding: 24px 18px;height: 600px;border: 0;'></iframe>";
    $($(".link-con>.link-item")[0]).append(iframe_content);
    setTimeout(function () {
        var _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('header-fix');   //get iframe下的id
        _iframe[0].style.display = "none";
        _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('link-area');   //get iframe下的id
        _iframe[0].style.display = "none";
        _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('extra');   //get iframe下的id
        _iframe[0].style.display = "none";
        _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('comment-area');   //get iframe下的id
        _iframe[0].style.width = "804px";
        _iframe[0].style.margin = "-74px 0 0 0";

        $("#iframe").css("height", _iframe[0].clientHeight + 83);
    }, 200);

    setTimeout(function () {
        var _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('comment-area');
        $("#iframe").css("height", _iframe[0].clientHeight + 236);
    }, 1000);
    setTimeout(function () {
        var _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('comment-area');
        $("#iframe").css("height", _iframe[0].clientHeight + 236);
    }, 1500);
    setTimeout(function () {
        var _iframe = document.getElementById('iframe').contentWindow.document.getElementsByClassName('comment-area');
        $("#iframe").css("height", _iframe[0].clientHeight + 236);
    }, 2000);
}