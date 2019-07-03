/**
 * Created by Star X. on 2016/7/5.
 */
function chkisfailed(data,nologin,kick,invaid_operation,failed,loginurl){
    if(data == nologin){
        layer.msg("登录超时，请重新登录",{time:1000},function(){
            window.location.href = loginurl;
        });
    }else if(data == kick){
        layer.msg("您的账号已在其他地点登录！");
        window.location.href = loginurl;
    }else if(data == failed){
        layer.msg("操作失败！");
    }else if(data == invaid_operation){
        layer.msg("亲，你想干嘛");
    }
}
function isLogin(username){
    if(username != ""){
        return true;
    }
    return false;
}
