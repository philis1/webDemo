//鼠标移动到元素上方时
function mouseOver(obj){
    var menu =document.getElementsByClassName("i_bd");  //寻找该事件子节点（商品子类别）
    menu[0].style.display='block';                      //设置子节点显示
}

//鼠标移出到元素上方时
function mouseOut(obj){
    var menu =document.getElementsByClassName("i_bd");  //寻找该事件子节点（商品子类别）
    menu[0].style.display='none';                       //设置子节点隐藏
}

