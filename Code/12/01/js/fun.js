var site_url = "http://www.mingrisoft.com";
/**
 * 将提示消息滑动显示
 * @param msg 提示消息
 */
function success(msg){
    $(".fbcg-right").html(msg);
    $(".fbcg").slideDown(400);
    setTimeout(function(){
        $(".fbcg").hide(100);
    },500)
}
function message(classname1,classname2,msg){
    $("."+classname1).html(msg);
    $("."+classname2).slideDown(400);
    setTimeout(function(){
        $("."+classname2).hide(300);
    },500)
}
/**
 * 判断浏览器是否支持某一个CSS3属性
 * @param {String} 属性名称
 * @return {Boolean} true/false
 */

function supportCss3(style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function (string) {
            return string.replace(/-(\w)/g, function ($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (i in prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));

    humpString.push(_toHumb(style));

    for (i in humpString)
        if (humpString[i] in htmlStyle) return true;

    return false;
}
/**
 * 将提示消息滑动显示
 * @param msg 提示消息
 */
function mnselect(){
    var div = $(".smalldiv");
    if(div.css("display") == "none"){
        div.slideDown("fast");
    }else{
        div.slideUp("fast");
    }
}
function seachVideo(url){
    window.location.href = url;
}

function rend_video(url){
    window.location.href = url;
}
var iTime = 59;
var Account;

// 倒计时
function RemainTime(){
    $("#zphone").attr("disabled",true);
    var iSecond,sSecond="",sTime="";
    if (iTime >= 0){
        iSecond = parseInt(iTime%60);
        iMinute = parseInt(iTime/60)
        if (iSecond >= 0){
            if(iMinute>0){
                sSecond = iMinute + "分" + iSecond + "秒";
            }else{
                sSecond = iSecond + "秒";
            }
        }
        sTime=sSecond;
        if(iTime==0){
            clearTimeout(Account);
            sTime='获取手机验证码';
            iTime = 59;
            $("#zphone").attr("disabled",false);
        }else{
            Account = setTimeout("RemainTime()",1000);
            iTime=iTime-1;
        }
    }else{
        sTime='没有倒计时';
    }
    $("#zphone").val(sTime);
    $("#mobileMessage").hide();
}

function showsztype(obj){
    if(obj.value == 6){  // 如果是实战课程
        document.getElementById("sztype_container").style.display = "block";
    }else{
        document.getElementById("sztype_container").style.display = "none";
    }
}
function chkSearch(form){
    if(form.keyword.value == ""){
        form.keyword.focus();
        //alert("请输入要搜索的关键字！");
        return false;
    }
    return true;
}


function changeTime(time){
    if(!isNaN(time)){
        var value = new Array(0,0,0);
        if(time >= 3600){
            value[0] = Math.floor(time/3600);
            time = (time%3600);
        }
        if(time >= 60){
            value[1] = Math.floor(time/60);
            time = (time%60);
        }
        value[2] = Math.floor(time);
        if(value[2] < 10){
            value[2] = "0"+value[2];
        }
        if(value[1] < 10){
            value[1] = "0"+value[1];
        }
        if(value[0] == 0){
            t = value[1] + ":"+ value[2];
        }else{
            t = value[0] + ":" + value[1] + ":" + value[2];
        }
        return t;
    }else{
        return false;
    }
}
function menuFix() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className+=(this.className.length>0? " ": "") + "sfhover";
        }
        sfEls[i].onMouseDown=function() {
            this.className = "";
        }
        sfEls[i].onmouseout=function() {
            this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"),
                "");
        }
    }
}

function hideElem() {
    $('#popdiv').hide();
    $('#black_overlay').hide();
}
function showElem() {
    $('#popdiv').show();
    $('#black_overlay').show();
}
function hideDiv(sid,hid) {
    $('#'+sid).hide();
    $('#'+hid).hide();
}
function showDiv(sid,hid) {
    $('#'+sid).show();
    $('#'+hid).show();
}
function showError() {
    $('#errordiv').show();
    $('#black_error').show();
}
function hideError() {
    $('#reasondiv').hide();
    $('#errordiv').hide();
    $('#black_error').hide();
}
function hidePic(){
    $("#pic").hide();
}
function showReason() {
    $('#errordiv').hide();
    $('#black_error').hide();
    $('#reasondiv').show();
    $('#black_reason').show();
}
function hideReason() {
    $('#reasondiv').hide();
    $('#black_reason').hide();
}
function showOrHideCode(id){
    if($("#taskcode").css("display") == "none"){
        $("#taskcode").show();
        $("#ccontainer")[0].scrollTop = $("#ccontainer")[0].scrollHeight;
    }else{
        $("#taskcode").hide();
    }
}

function toBottom(){
    var e=document.getElementById("econtent")
    e.scrollTop=e.scrollHeight;
}
function hidecode(id){
    $("#taskdiv_"+id+" .codes").hide();
}
function refreshCode(){
    var obj = document.getElementById("imgcode");
    obj.src =obj.src+'?'+Math.random()
}
function changeColor(flag,url){
    if(flag == 1){
        $("#bj").css("background-image",url);
        $("#bj").css("color","#37a6d6");
        $("#qa").css("background-image","");
        $("#qa").css("color","#999999");
    }else{
        $("#qa").css("background-image",url);
        $("#qa").css("color","#37a6d6");
        $("#bj").css("background-image","");
        $("#bj").css("color","#999999");
    }
}
// str:原字符串 a:第一个字符 b:第二个字符
function cutstr(str,a,b){
    var s = a+"(\\d*)"+b+"(\\d*)";
    var exp = new RegExp(s,"g");
    exp.test(str);
    return RegExp.$1;
}
// 过滤掉字符串前面的0
function filter_zero(str){
    return str.replace(/\b(0+)/gi,"");
}
function judgeHeight(divId){
    var slideHeight = 81; // px
    $("#"+divId+" .wrap").each(function(){
        var defHeight = $(this).height();
        if(defHeight >= slideHeight){
            var w = $(this);
            w.css('height' , slideHeight + 'px');
            w.next().append('<a href="javascript:;"><img src='+site_url+'/Public/images/read-more.png /></a>');
            w.next().children().click(function(){
                var curHeight = w.height();
                if(curHeight == slideHeight){
                    w.animate({
                        height: defHeight
                    }, "normal");
                    $(this).html('<img src='+site_url+'/Public/images/read-top.png />');
                    w.find(".gradient").fadeOut();
                }else{
                    w.animate({
                        height: slideHeight
                    }, "normal");
                    $(this).html('<img src='+site_url+'/Public/images/read-more.png />');
                    w.find(".gradient").fadeIn();
                }
            });
        }
    });
}

function addlinenumber(){
    var arr = $('#allcode').html().split('<br>');
    var lines = $('#allcode').html().split('<br>').length ;
    $('#allcode').html("");
    for(i=1;i<=lines;i++){
        $('#allcode').append("<span class='linenum'>"+i+"</span>"+"&nbsp;"+arr[i-1]+"<br>");
    }
}
function getVideo(id,action,rel){
    $(".popular-courses-panel").slideToggle("slow");
    $.post(action, {'cate_id':id}, function(data){
        $("#hot_video").replaceWith(data);
    });
	$('#'+rel).addClass("on").parent("div").siblings("div").children("a").removeClass('on'); 
}
function chkInputCatalog (form) {
    if (form.course_id.value == "") {
        alert("请填写所属课程！");
        form.course_id.focus();
        return false;
    }
    if (form.part_id.value == "") {
        alert("请填写所属阶段！");
        form.part_id.focus();
        return false;
    }
    if (form.catalog_name.value == "") {
        alert("请填写目录名称！");
        form.catalog_name.focus();
        return false;
    }
    if (form.sort.value == "") {
        alert("请填写排序！");
        form.sort.focus();
        return false;
    }
    return true;
}
function getPart(){
    var course_id = $('#course_id').val();
    $.get('{:U(GROUP_NAME."/Course/getPart")}',"course_id="+course_id,function(data){
        if(data != ''){
            $("select[id=part_id]>option:first").nextAll().remove();
            $("#part_id").append(data)
        }else{
            $("select[id=part_id]>option:first").nextAll().remove();
        }
    });
}
function getCatalog(){
    var part_id = $('#part_id').val();
    $.get('{:U(GROUP_NAME."/Parts/getCatalogs")}',"part_id="+part_id,function(data){
        if(data != ''){
            var aa = eval("("+data+")");
            $("select[id=catalog_id]>option:first").nextAll().remove();
            $("#catalog_id").append(aa)
        }else{
            $("select[id=catalog_id]>option:first").nextAll().remove();
        }
    });
}
function chkUploadfile(){
    if($("#title").val() == ""){
        alert("请填写上传文件标题！");
        $("#title").focus();
        return false;
    }
    var tl = getLength($("#title").val());
    if(tl > 30){
        alert("文件名称字数超出限制，请重新输入！");
        $("#title").focus();
        return false;
    }
    if($("#description").val() == ""){
        alert("请填写文件描述！");
        $("#description").focus();
        return false;
    }
    var dl = getLength($("#description").val());
    if(dl > 160){
        alert("文件描述字数超出限制，请重新输入！");
        $("#description").focus();
        return false;
    }
    if($("#file").val() == ""){
        alert("请选择您要上传的文件！");
        return false;
    }
    var ext = getExt($("#file").val());
    if(!(ext == ".txt" || ext==".rar" || ext==".doc" || ext==".zip")){
        alert("上传文件类型不符合要求，请重新上传！")
        return false;
    }
    return true;
}
function getExt(filename)
{
    var fileExtend="";
    var pos = filename.lastIndexOf(".");
    var fileExtend = filename.substring(pos,filename.length)
    return fileExtend;
}
function chkdel(name){
    var checkboxes = document.getElementsByName(name);
    var bl = false;
    for(var i=0;i<checkboxes.length;i++){
        if(checkboxes[i].checked){
            bl = true;
            break;
        }
    }
    if(bl == false){
        layer.msg("请至少选择一条记录再删除！");
        return false;
    }
    return confirm("确定删除吗？");
}
function getLength(str){
    var l = str.length;
    var blen = 0;
    for(i=0;i<l;i++){
        if((str.charCodeAt(i) & 0xff00) != 0 ){
            blen++;
        }
        blen++;
    }
    return blen;
}

function in_array(keyword,array){
    for(s=0;s<array.length;s++){
        thisEntry = array[s].toString();
        if(thisEntry == keyword){
            return true;
        }
    }
    return false;
}
Array.prototype.indexOf = function(val){
    for(var i=0;i<this.length;i++){
        if(this[i] == val) return i;
    }
    return -1;
}

function removeByValue(arr, val) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == val) {
            arr.splice(i, 1);
            break;
        }
    }
}
/*Array.prototype.remove = function(val){
    var index = this.indexOf(val);
    if(index > -1){
        this.splice(index,1);
    }
}*/
function getIEVersion(){
    var browserVersion = navigator.appVersion .split(";")[1].replace(/[ ]/g,"");
    return browserVersion;
}
function isContains(str,substr){
    return str.indexOf(substr) >= 0;
}
// 跳转到指定url
function gotosee(url){
    window.location.href = url;
}

//图片放大
function CheckBigImg(){
    $('.wrap img').each(function(){
        if($(this).parent().prop("tagName") != "A"){
            $(this).wrap("<a href='"+$(this).attr("src")+"' onclick='return hs.expand(this)'></a>");
        }
    });
}

// 检测flash是否安装以及安装版本
function flashChecker()
{
    var hasFlash=0;         //是否安装了flash
    var flashVersion=0; //flash版本
    var isIE=/*@cc_on!@*/0;      //是否IE浏览器

    if(isIE)
    {
        var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if(swf) {
            hasFlash=1;
            VSwf=swf.GetVariable("$version");
            flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]);
        }
    }else{
        if (navigator.plugins && navigator.plugins.length > 0)
        {
            var swf=navigator.plugins["Shockwave Flash"];
            if (swf)
            {
                hasFlash=1;
                var words = swf.description.split(" ");
                for (var i = 0; i < words.length; ++i)
                {
                    if (isNaN(parseInt(words[i]))) continue;
                    flashVersion = parseInt(words[i]);
                }
            }
        }
    }
    return {f:hasFlash,v:flashVersion};
}
//判断上传文件格式是否满足条件
function isRightType(fileName,suppotFile){
    if(fileName!=null && fileName !=""){
        //lastIndexOf如果没有搜索到则返回为-1
        if (fileName.lastIndexOf(".")!=-1) {
            var fileType = (fileName.substring(fileName.lastIndexOf(".")+1,fileName.length)).toLowerCase();
            for (var i =0;i<suppotFile.length;i++) {
                if (suppotFile[i]==fileType) {
                    return true;
                } else{
                    continue;
                }
            }
            return false;
        } else{
            return false;
        }
    }
}

//判断上传文件名称是否满足条件
function checkFilename(fileName){   
	if (fileName.lastIndexOf("\\") != -1) {
		var t1 = fileName.lastIndexOf("\\");  
		var t2 = fileName.lastIndexOf(".");  
		return fileName.substring(t1+1,t2); 
	} else{
		return false;
	}
}
// 将光标移至最后
function moveEnd(obj) {
    obj.focus();
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character', len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number'
        && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
    }
}
/**
 * Author：Star Xin
 * 倒计还可显示多少字数
 * @param len 允许显示的长度
 * @param inputlen 实际长度
 * @param type 1：显示超出多少字。0：不显示超出多少字
 */
function compareCount(len,inputlen,type){
    if (len >= inputlen) {
        leavelen = len - inputlen;
        $("#countWord").html("还可以输入<span class='wordcolor'>"+leavelen+"</span>个字");
    }
    if(type == 1 && len < inputlen){
        leavelen = inputlen - len;
        $("#countWord").html("已超出<span class='wordout'>"+leavelen+"</span>个字");
    }
    if(type == 0 && len < inputlen){
        $("#countWord").html("");
    }
}
function wordCount(len,id,type){
    var inputword = $("#"+id).val();
    inputlen = inputword.length;
    compareCount(len,inputlen,type);

}

function scaleImage(width,height,l,obj,hs){
    if(width>l){
        per = l / width;
        var small_height = Math.round(height * per);
        obj.attr('width',l);
        obj.attr('height',small_height);
    }else if(height>l){
        per = l / height;
        var small_width = Math.round(width * per);
        obj.attr('width',small_width);
        obj.attr('height',l);
    }
    if(width>l || height>l){
        if(obj.parent().prop("tagName") != "A"){
            obj.wrap("<a href='"+obj.attr("src")+'\' onclick="return hs.expand(this);"><div></div></a>');
			obj.addClass('abc');	
			//$(\'.highslide-wrapper\').smartZoom({\'containerClass\':\'zoomableContainer\'});
        }
    }
}

function preventBuddle(e){
    if(e && e.stopPropagation){   // 非IE浏览器
        e.stopPropagation();
    }else{  // IE浏览器
        window.event.cancelBubble = true;
        window.event.returnValue = false;
    }
}
function redirect(url){
    window.location.href = url;
}
function plslogin(){
//    layer.msg("请先登录",{time:1000},function(){
//        display_window('loginwindow','900px', '1000px');
//    });
    display_window('loginwindow','900px', '1000px');
}
function getSelectValues(select){
    var options = select && select.options;
    var select_arr = [];
    for(var i=0;i<options.length;i++){
        if(!in_array(options[i].text,select_arr)){
            select_arr.push(options[i].text);
        }
    }
    return select_arr;
}
function inGroup(select,str){
    var select_arr = getSelectValues(select);
    if(in_array(str,select_arr)){
        return true;
    }
    return false;
}
function removeArrayElement(arr,val){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == val){
            arr.splice(i,1);
            break;
        }
    }
}
function chkpositivenumber(str,name,field_name){
    if(isNaN(str)){
        layer.msg(field_name+"请输入数字");
		$(name).focus();
        return false;
    }
    if(str <= 0){
        layer.msg(field_name+"请输入大于0的数字");
		$(name).focus();
        return false;
    }
    return true;
}

function isIE(){
    if (window.navigator.userAgent.indexOf("MSIE")>=1)
        return true;
    else
        return false;
}

function closeWindow() {
    var browserName = navigator.appName;
    var userAgent = navigator.userAgent;
    if (browserName=="Netscape") {
        window.open("", "_self","");
        window.close();
    }
    else {
        if (browserName == "Microsoft Internet Explorer"){
            window.opener = "mr";
            window.opener = null;
            window.open('', '_top');
            window.close();
        }
    }
}

// 分享到新浪微博
function shareToSina(title,picurl){
    var sharesinastring='http://v.t.sina.com.cn/share/share.php?title='+title+'&searchPic=false&url='+location.href+'&content=utf-8&sourceUrl='+location.href+'&pic='+picurl;
    window.open(sharesinastring,'newwindow','height=400,width=400,top=100,left=100');
}

// 分享到QQ空间
function shareToQQ(title,picurl){
    var shareqqzonestring='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+title+'&url='+location.href+'&pics='+picurl;
    window.open(shareqqzonestring,'newwindow','height=400,width=400,top=100,left=100');
}

function wesPrint(id_s)
{
    var cc = document.getElementById(id_s).innerHTML;
    var isIe=0;
    if(navigator.userAgent.indexOf('MSIE')>0){
        isIe = 1;
    }
    var frame = document.getElementById('dsh_myframe');
    if (!frame) {
        frame = document.createElement('iframe');
        frame.id ='dsh_myframe';
        frame.setAttribute('style','width: 0pt; height: 0pt;')
    }
    if (isIe) {
        frame.src = 'javascript:;';
        frame.style.cssText= 'width: 0pt; height: 0pt;';
    }
    document.body.appendChild(frame);
    if (isIe) {
        doc = frame.contentWindow.document;
    } else {
        doc = frame.contentDocument;
    }
    doc.write(cc);
    doc.close();
    frame.contentWindow.focus();
    if(isIe){
        setTimeout(function(){
            frame.contentWindow.print();
        },2);
    }else{
        frame.contentWindow.print();
    }
}