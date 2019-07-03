$(function(){
    $("#login_form").validate({
        ignore: "",
        onsubmit:true,
        onfocus:true,
        rules:{
            username:{
                required:true,
                rangelength:[3,18],
                remote: {
                    type: "post",
                    url: chknameurl,
                    data: {
                        username: function() {
                            return $("#username").val();
                        }
                    },
                    dataType:"html",
                    dataFilter: function(data, type) {
                        if(data == 1)
                            return true;
                        else if(data == 2)
                            return false;
                    }
                }
            },
            password:{
                required:true,
                rangelength:[6,16]
            },
            iQapTcha:{
                required:true,
                remote: {
                    type: "post",
                    url: chkQapTchaurl,
                    dataType:"html",
                    data: {
                        qaptcha: function() {
                            return $("#iQapTcha").val();
                        }
                    },
                    dataFilter: function(data) {
                        if(data == 1)
                            return true;
                        else if(data == 2)
                            return false;
                    }
                }
            }
        },
        messages:{
            username:{
                required:"请输入用户名",
                rangelength:"用户名为3-18位",
                remote:"用户名不存在"
            },
            password:{
                required:"请输入密码",
                rangelength:"密码为6-16位"
            },
//            code:{
//                required:"请输入验证码"
//            }
            iQapTcha:{
                required:"请滑动滑块",
                remote:"请滑动滑块"
            }
        },
        submitHandler:function(){
            $.post(chkloginurl,{"username":$("#username").val(),"password":_a($("#password").val()),"QapTcha":$("#QapTcha").val(),"backurl":$("#backurl").val(),"cookie":$("#loga").prop("checked")},function(data){
                var info = eval("("+data+")");
                if(info.result == 2){
                    layer.msg('亲，你要干嘛！');
                }else if(info.result == 3){
                    refreshCode();
                    layer.msg("验证码填写错误，请重新填写！");
                    $("#code").focus();
                }else if (info.result == 4){
                    layer.msg("密码输入错误，请重新填写！");
                    $("#password").focus();
                }else if (info.result == 5){
                    layer.msg("您已被管理员封号，请联系管理员或者在线客服！",{time:3000});
                    $("#username").focus();
                }else if(info.result== 1){
                    //$(document.body).append(info.loginurl);
                    layer.msg('登录成功！',{time:1000},function(){
                        //window.location.href = info.url;
                        location.replace(info.url);
                        //event.returnValue=false;
                    });
                }else{
                    layer.msg(info.result+"，请重新输入！");
                }
            });
        },
        invalidHandler:function(){
            return false;
        }
    });

});
document.onkeydown = function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(document.activeElement.id == "password"){
        // if(e.keyCode == 9){
        //     document.getElementById("code").focus();
        //     return false;
        // }
    }
    // if(document.activeElement.id == "code"){
    //     HandleTabKey(e)
    // }
}
function HandleTabKey(evt){
    if(evt.keyCode == 9){
        if(evt.preventDefault){
            evt.preventDefault();
        }else{
            evt.returnValue = false;
        }
    }
}
function refreshCode(){
    var obj = document.getElementById("imgcode");
    obj.src =obj.src+'?'+Math.random()
}
var winst=(function(){
    var p={};
    return {
        open:function(url){
            var l,t;
            l=(screen.width-800)/2,
                t=(screen.height-480)/2;
            (p[url]=window.open(url, '_blank', 'toolbar=no, directories=no, status=no, menubar=no, width=800, height=480, top='+t+', left='+l)).focus();
        }
    }
})();
function showLoginWindow(a){
    this.winst.open($(a).attr("data-st"));
}