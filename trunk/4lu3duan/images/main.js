
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
  }else if (targ.tagName=="INPUT" && targ.className =="topTitle") {
    if (pencolor==1||pencolor==""||pencolor==null) {
      targ.style.color="black";
    } else if (pencolor==2) {
      targ.style.color="red";
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
function init(){
  addLastRow();
}
function addLastRow(){
  var i,j,rowObj,newCol,tableObj;
  for (j=1;j<=6;j++){
    tableObj=document.getElementById("table"+j);    //找到相应表
    rowObj =tableObj.rows[5];   //找到相应行
    if (rowObj.cells.length==1) {     //确定下注行没有设置
      for (i=1;i<tableObj.rows[0].cells.length;i++) {
        newCol=rowObj.insertCell(rowObj.cells.length);
	    newCol.innerHTML="<input class='fontblack' type=text/>";
      }
    }
  }
}
function sum() {
  var i,j,tableObj,rowObj,cellObj,inputObj;
  var winTime=0.0,lostTime=0.0,winBet=0.0,lostBet=0.0;
  for (j=1;j<=3;j++){
    tableObj=document.getElementById("table"+j);    //找到相应表
    rowObj =tableObj.rows[5];   //找到相应行
    for (i=1;i<tableObj.rows[0].cells.length;i++) {
	  cellObj=rowObj.cells[i];
	  inputObj=cellObj.firstChild;
	  if (inputObj.value != "") {
	    if (inputObj.className=="fontred") {
          winTime++;
          winBet+=parseFloat(inputObj.value);
		} else if (inputObj.className=="fontblack") {
          lostTime++;
		  lostBet+=parseFloat(inputObj.value);
		}
	  }
    }
  }
  document.getElementById("winTime1").value=winTime;
  document.getElementById("lostTime1").value=lostTime;
  document.getElementById("winBet1").value=formatFloat(winBet,2);
  document.getElementById("lostBet1").value=formatFloat(lostBet,2);
  if (winTime>lostTime) {
    document.getElementById("timeDiff1").style.color = "red";
	document.getElementById("timeDiff1Text").style.color = "red";
    document.getElementById("timeDiff1").value=winTime-lostTime;
  } else if (winTime<=lostTime) {
    document.getElementById("timeDiff1").style.color = "black";
	document.getElementById("timeDiff1Text").style.color = "black";
    document.getElementById("timeDiff1").value=lostTime-winTime;
  }
  if (winBet>lostBet) {
    document.getElementById("betDiff1").style.color = "red";
	document.getElementById("betDiff1Text").style.color = "red";
	document.getElementById("benefit1").style.color = "red";
	document.getElementById("benefit1Text").style.color = "red";
    document.getElementById("betDiff1").value=formatFloat(winBet-lostBet,2);;
	document.getElementById("percent1").value=formatFloat(winBet*0.025,2);
	document.getElementById("benefit1").value=formatFloat(winBet-lostBet-winBet*0.025,2);
  } else if (winBet<=lostBet) {
    document.getElementById("betDiff1").style.color = "black";
	document.getElementById("betDiff1Text").style.color = "black";
	document.getElementById("benefit1").style.color = "black";
	document.getElementById("benefit1Text").style.color = "black";
    document.getElementById("betDiff1").value=formatFloat(lostBet-winBet,2);
	document.getElementById("percent1").value=formatFloat(winBet*0.025,2);
	document.getElementById("benefit1").value=formatFloat(lostBet-winBet+winBet*0.025,2);
  }
  
  winTime=0.0,lostTime=0.0,winBet=0.0,lostBet=0.0;
  for (j=4;j<=6;j++){
    tableObj=document.getElementById("table"+j);    //找到相应表
    rowObj =tableObj.rows[5];   //找到相应行
    for (i=1;i<tableObj.rows[0].cells.length;i++) {
	  cellObj=rowObj.cells[i];
	  inputObj=cellObj.firstChild;
	  if (inputObj.value != "") {
	    if (inputObj.className=="fontred") {
          winTime++;
          winBet+=parseFloat(inputObj.value);
		} else if (inputObj.className=="fontblack") {
          lostTime++;
		  lostBet+=parseFloat(inputObj.value);
		}
	  }
    }
  }
  document.getElementById("winTime2").value=winTime;
  document.getElementById("lostTime2").value=lostTime;
  document.getElementById("winBet2").value=formatFloat(winBet,2);
  document.getElementById("lostBet2").value=formatFloat(lostBet,2);
  if (winTime>lostTime) {
    document.getElementById("timeDiff2").style.color = "red";
	document.getElementById("timeDiff2Text").style.color = "red";
    document.getElementById("timeDiff2").value=winTime-lostTime;
  } else if (winTime<=lostTime) {
    document.getElementById("timeDiff2").style.color = "black";
	document.getElementById("timeDiff2Text").style.color = "black";
    document.getElementById("timeDiff2").value=lostTime-winTime;
  }
  if (winBet>lostBet) {
    document.getElementById("betDiff2").style.color = "red";
	document.getElementById("betDiff2Text").style.color = "red";
	document.getElementById("benefit2").style.color = "red";
	document.getElementById("benefit2Text").style.color = "red";
    document.getElementById("betDiff2").value=formatFloat(winBet-lostBet,2);
	document.getElementById("percent2").value=formatFloat(winBet*0.025,2);
	document.getElementById("benefit2").value=formatFloat(winBet-lostBet-winBet*0.025,2);
  } else if (winBet<=lostBet) {
    document.getElementById("betDiff2").style.color = "black";
	document.getElementById("betDiff2Text").style.color = "black";
	document.getElementById("benefit2").style.color = "black";
	document.getElementById("benefit2Text").style.color = "black";
    document.getElementById("betDiff2").value=formatFloat(lostBet-winBet,2);
	document.getElementById("percent2").value=formatFloat(winBet*0.025,2);
	document.getElementById("benefit2").value=formatFloat(lostBet-winBet+winBet*0.025,2);
  }
}
function save(){    
	var strHTML =document.documentElement.outerHTML;
	var   winSave   =   window.open(); 
	winSave.document.open("text/html","utf-8");   
    winSave.document.write(strHTML);   
    winSave.document.execCommand("SaveAs",true,"f:\\四路三断反.html");   
    winSave.close();   
}
function formatFloat(src, pos)
{
    return Math.round(src*Math.pow(10, pos))/Math.pow(10, pos);
}