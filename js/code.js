$(document).ready(function(){
    var box = $(".box");
    var ths = $(this);

  /*box.mouseover(function(){
        $(this).css("background","#f33")
               .css("border","3px solid #a00");
    });
    box.mouseout(function(){
        $(this).css("background","#ff0")
               .css("border","3px solid #aa0");
    });*/
    function changeRed(){
        $(this).css("background","#f33")
               .css("border","3px solid #a00");
    };
    function changeyellow(){
        $(this).css("background","#ff0")
               .css("border","3px solid #aa0");
    };
    box.hover(changeRed,changeyellow)

    box.click(function(){
        $(this).css("background","#0df")
               .css("border","3px solid #09a");
    });
    box.dblclick(function(){
        $(this).css("background","#ddd")
               .css("border","3px solid #aaa");
    });
    box.focus(function(){
        $(this).css("background","#55f")
               .css("border","3px solid #33e");
    });
    box.blur(function(){
        $(this).css("background","#0f0")
               .css("border","3px solid #0a0");
    });
});