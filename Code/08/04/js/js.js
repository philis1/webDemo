function checkTitle() {
	var title1 = document.getElementById("input").value;//获取单行文本框
	var declare = document.getElementById("type").value;//获取文本域
	if ((title1.length < 4) || (title1.length > 30)) {//判断文本框中的内容长度是否符合要求
		document.getElementById("title").style.display = "inline";//如果不符合，弹出提示语句
		return false
	}
	if ((declare.length < 10) || (declare.length > 10000)) {//判断文本域中内容和长度是否符合要求
		document.getElementById("letternum").style.display = "block";//如果不符合，弹出提示语句
		return false
	}
}

function typeIn() {
	document.getElementById("type").style.display = "block";//当点击页面中的版权声明时，将文本域设为显示
	document.getElementById("type").focus()                 //设置文本域获取焦点
}
