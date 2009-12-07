var pencolor=1;
function document.oncontextmenu(){ //屏蔽系统右键功能 
  return false; 
}

function rclick(e){
  var targ = findTarget(e);
  //alert("You clicked on a " + targ.tagName + " element.")
  var rowObj = targ.parentNode;
  if (targ.tagName=="TD" && rowObj.rowIndex<=4 && rowObj.rowIndex>=1) {	//限制点击元素区域
    if(event.button == 1){//左键
     targ.className="tdimgred"
    }else if(event.button == 2){ //点击鼠标右键
     targ.className="tdimgblack"
    }else if(event.button == 4){ //中间按键
      targ.background="";
    }
  } else if (targ.tagName=="INPUT" && rowObj.parentNode.rowIndex==5) { //押注行处理
    if (pencolor==1||pencolor==""||pencolor==null) {
      targ.className="fontblack";
    } else if (pencolor==2) {
      targ.className="fontred";
    }	
  }
}
function findTarget(e) {
  var targ;
  if (!e) {
    var e = window.event;
  }
  if (e.target) {
    targ = e.target;
  } else if (e.srcElement) {
    targ = e.srcElement;
  }
  if (targ.nodeType == 3) {// defeat Safari bug
    targ = targ.parentNode;
  }
  return targ;
}

function changeColor(e){//设置字体颜色
  if(event.keyCode==16){//设置画笔颜色
    if(pencolor==1){
      pencolor=2;
	  document.getElementById("changecolor").className="penred";
    }else{
      pencolor=1;
      document.getElementById("changecolor").className="penblack";
    }
  }
  if(event.keyCode==27){//删除记录
    var targ = findTarget(e);
	var rowObj = targ.parentNode;
	if (targ.tagName=="TD" && rowObj.rowIndex<=4 && rowObj.rowIndex>=1) {	//限制点击元素区域
        targ.className="";
	}
  }
}