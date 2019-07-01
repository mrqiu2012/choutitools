$(document).ready(function () {
    set_comment_code();

    function set_comment_code() {
        var comments = $(".operate-item.comment");
        var len = comments.length;
        if (len < 50) {
            console.log("延迟设置");
            setTimeout(function () {
                set_comment_code();
            }, 1000);
            return;
        }
        for (i = 0; i < len; i++) {
            var now_href = $(comments[i]).attr("href");
            var code = '$("#iframe").remove();' +
                'var iframe_content="<iframe scrolling=\'no\' id=\'iframe\' frameborder=\'0\' class=\'g-iframe\' src=\'https://dig.chouti.com/' + now_href + '\' style=\'width: 840px;padding: 24px 18px;height: 600px;border: 0;\'></iframe>";' +
                '$($(".link-con>.link-item")[' + i + ']).append(iframe_content);' +
                'var _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'header-fix\');' +
                'if(_iframe.length>0){_iframe[0].style.display="none"};' +
                'setTimeout(function(){' +
                '   var _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'header-fix\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'link-area\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'extra\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');' +
                '   _iframe[0].style.width="804px";_iframe[0].style.margin="-74px 0 0 0";' +
                '   $("#iframe").css("height",_iframe[0].clientHeight+236);' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'original-link-top-area\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'original-link-operate-con\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'original-link-area\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '   _iframe=document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'footer\');' +
                '   if(_iframe.length>0){_iframe[0].style.display="none"};' +
                '}, 500);' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 1000);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 1500);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 2000);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 2500);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 3000);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 3500);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 4000);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 4500);\n' +
                'setTimeout(function () {\n' +
                '    var _iframe = document.getElementById(\'iframe\').contentWindow.document.getElementsByClassName(\'comment-area\');\n' +
                '    $("#iframe").css("height", _iframe[0].clientHeight + 236);\n' +
                '}, 5000);';
            $(comments[i]).attr("href", "javascript:" + code);
        }
    }

    $("body").attr("onclick", "javascript:$('#iframe').remove();");
    $(".msgAlert-place").attr("onclick", "javascript:window.location.href='https://dig.chouti.com/';");
    $(".msg-alert>a").attr("href", "https://dig.chouti.com/");
});

