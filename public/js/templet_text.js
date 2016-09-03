$(function(){
    
    $("#accept").on("click", function(){ 
        $("#tip").html("");
        var textId = $("#textId").val().trim();
        if(textId==undefined || textId == ''){
            $("#tip").html("ID不能为空");
            return;
        }else if(textId.length > 8){
            $("#tip").html("ID长度不能大于8");
            return;
        }else if(!textId.match('\\d+')){
            $("#tip").html("ID不能包含非数字字符");
            return;
        }
        $.ajax({
            url: "templet_text/get", 
            type: "get",    
            data:{
                textId: textId
            }, 
            dataType:"json",
            success: function(data){
                if(data.done){
                    $("#textContent").val(data.textContent);
                }else{
                    $("#tip").html("没有匹配的文本");
                }
            }
        });
    });
    $("#submit").on("click", function(){ 
        $("#tip").html("");
        var textId = $("#textId").val().trim();
        if(textId==undefined || textId == ''){
            $("#tip").html("ID不能为空");
            return;
        }else if(textId.length > 8){
            $("#tip").html("ID长度不能大于8");
            return;
        }else if(!textId.match('\\d+')){
            $("#tip").html("ID不能包含非数字字符");
            return;
        }
        var textContent = $("#textContent").val().trim();
        if(textContent == ''){
            $("#tip").html("文本内容不能为空");
            return;
        }
        $.ajax({
            url: "templet_text/post", 
            type: "post",   
            data:{
                textId: textId,
                textContent: textContent
            }, 
            dataType:"json",
            success: function(data){
                if(data.done){
                    $("#tip").html("数据提交成功");
                }else{
                    $("#tip").html("数据提交失败");
                }
            }
        });
    });
});