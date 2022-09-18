$(document).ready(function(){
    var box = $(".box");
    var ths = $(this);

    $("#uno").blur(function(){
        var uno = $(this).val()
        box.css("background-color",uno);
    });
    $("#uno-b").blur(function(){
        var unoB = $(this).val()
        box.css("border","3px solid "+unoB);
    });
    box.mouseover(function(){
        $(this).css("background-color","#f33");
               .css("border","3px solid #a00");
    });
    box.mouseout(function(){
        $(this).css("background-color","#ff0");
    });
    box.mouseout(function(){
        $(this).css("border","3px solid #aa0");
    });
    box.mouseout(function(){
        $("#dos").blur(function(){
            var dos = $(this).val();
            box.mouseout(function(){
                $(this).css("background-color",dos);
            });
        });
    });
    box.mouseout(function(){
        $("#dos-b").blur(function(){
            var dosB = $(this).val();
            box.mouseout(function(){
                $(this).css("border","3px solid "+dosB);
            });
        });
    });

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

    //mouse
    $(document).mousemove(function(){
        $("#mouse").css("left",event.clientX)
                   .css("top",event.clientY)
    });

});
