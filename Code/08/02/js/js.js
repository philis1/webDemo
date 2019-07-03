function show1(){         //当单击文本框时所调用的函数
    var source=document.getElementById("shizhan");//获取列表项
    source.style.display="block";//将列表的显示方式设为显示
    for(var i=1;i<6;i++){
        var child1=source.getElementsByTagName("li")[i];//通过循环语句获取列表中的所有列表项
        child1.onclick=function(){//当单击某个列表项时调用的函数
            document.getElementById("txt").value=this.innerHTML;//将这个列表项的内容复制给文本框
        }
    }
}
function hide1(){//当单击图片按钮时，调用的函数
    var source=document.getElementById("shizhan");//获取列表
	var img=document.getElementById("img");//获取图片
    source.style.display="none";//将裂帛啊设为隐藏
	img.style.opacity=0.3;//给图片添加透明度
	document.getElementById("ball").style.display="block"//将动画设为显示
}

		
	

