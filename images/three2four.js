var pencolor=1;
document.onkeydown=kclick2;

function document.oncontextmenu(){  
  return false; 
}
function rclick(obj){
	if(event.button == 1){
		objpoint(obj,"tdimgred");
		tabcount();
		mainIteritive(1);
		mainIteritive(2);
		mainIteritive(3);
		
	}else if(event.button == 2){ 
		objpoint(obj,"tdimgblack");
		tabcount();
		mainIteritive(1);
		mainIteritive(2);
		mainIteritive(3);
	}
}
function kclick(obj){
	
	if(event.keyCode==27){
		if(confirm("确认删除吗?")){
			obj.className="";
			//obj.firstChild.value="";
			obj.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
		}
	}
}
function kclick2(){
	if(event.keyCode==16){
		if(pencolor==1){
			pencolor=2;
			document.getElementById("changecolor").className="penred";
			document.getElementById("changecolor2").className="penred";
		}else{
			pencolor=1;
			document.getElementById("changecolor").className="penblack";
			document.getElementById("changecolor2").className="penblack";
		}
	}
}
function changecolor(obj){
	if(event.keyCode!=27){
		if(pencolor==1||pencolor==""||pencolor==null){
			obj.className="fontblack";
		}else if(pencolor==2){
			obj.className="fontred";
		}
	}
	
}
var kc=function(obj){
	return function(){
		kclick(obj);
	}
}
var rc=function(obj){
	return function(){
		rclick(obj);
	}
}
function init(){	
	var table=document.getElementById("tablemainup");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
		}
	}
	var table=document.getElementById("tablemaindown");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
		}
	}
}
function addEventHandler(oTarget, sEventType, fnHandler){
    if (oTarget.addEventListener) { 
    	oTarget.addEventListener(sEventType, fnHandler, false);   
    } else if (oTarget.attachEvent) {   
    	oTarget.attachEvent("on" + sEventType, fnHandler);   
    } else {   
    	oTarget["on" + sEventType] = fnHandler;
    }   
}

function objpoint2(obj,str){//每次可以添加多个圈(不需要这个功能了)
	var table=obj.parentNode.parentNode.parentNode;//获得当前点击的table
	var i=obj.parentNode.rowIndex;//当前点击的td的行数
	var j=obj.cellIndex;//当前点击的td的列数
	for(var a=0;a<=i;a++){
		table.rows[a].cells[j].className=str;
	}
}
function objpoint(obj,str){
	var table=obj.parentNode.parentNode.parentNode;
	var i=obj.parentNode.rowIndex;
	var j=obj.cellIndex;
	
	table.rows[i].cells[j].className=str;
	
	
}
function tableclear(tableup,tabledown)
{
	tableup=document.getElementById(tableup);
	tabledown=document.getElementById(tabledown);
	for(var i=0;i<21;i++)
	{
		for(var j=0;j<6;j++)
		{
			tableup.rows[j].cells[i].className="";
			tabledown.rows[j].cells[i].className="";
		}
	}
}

var formercolor="";
var addcell=0; 
var addrow=0; 


var tabcolor="";
var tabcell=0;
var tabrow=0;
var tabcellgo=0;
var round=0;
var iternum=0;

var cellflag=0;

function mainIteritive(countflag)
{
	
	 tabcolor="";
	 tabcell=0;
	 tabrow=0;
	 tabcellgo=0;
	 round=0;
	 if(countflag==1)
	 {
		 tableclear("tableoneup","tableonedown");
	 }
	 else if(countflag==2)
	 {
		 tableclear("tabletwoup","tabletwodown");
	 }
	 else if(countflag==3)
	 {
		 tableclear("tablethreeup","tablethreedown");
	 }
	
	
	 
	var maintab=document.getElementById("maintab");
	var selfvalue;
	var leftvalue;
		
	for(var i=countflag;i<42;i++)
	{
		Loop: for(var j=1;j<=36;j++)
		{
			
			if(j==36)
			{
				if(iternum==0)
				{
						if(i<41)
						{	
							if(maintab.rows[0].cells[i+1].innerHTML=="")
							{
								return;
							}
							else
							{
								tabaddone(1,countflag);
								iternum=0;
							}
						}
				}
				else
				{
					if(i<41)
					{
						if(maintab.rows[0].cells[i+1].innerHTML=="")
						{
							return;
						}
						else
						{
							tabaddone(2,countflag);
							iternum=0;
						}
					}
				}
			}
			else
			{
				
				selfvalue=maintab.rows[j].cells[i].innerHTML;
				leftvalue=maintab.rows[j].cells[i-countflag].innerHTML;	
									
					if(selfvalue!=""&&leftvalue!="")	
					{
						tabaddone(1,countflag);
					}
					else if(selfvalue!=""&&leftvalue==""&&iternum==0)	
					{
						tabaddone(2,countflag);
						iternum=1;
					}
					else if(selfvalue!=""&&leftvalue==""&&iternum==1)	
					{
						tabaddone(1,countflag);
					}
					else if(selfvalue==""&&leftvalue!="")	
					{
						if(i<41)
						{		
							if(maintab.rows[0].cells[i+1].innerHTML=="")
							{
								return;
							}
							else
							{
								tabaddone(2,countflag);
								iternum=0;
								break Loop;
							}
						}
					}
					else if(selfvalue==""&&leftvalue==""&&iternum==0)	
					{
						if(i<41)
						{
							if(maintab.rows[0].cells[i+1].innerHTML=="")
							{
								return;
							}
							else
							{
								tabaddone(1,countflag);
								iternum=0;
								break Loop;
							}
						}
					}
					else if(selfvalue==""&&leftvalue==""&&iternum==1)	
					{
						if(i<41)
						{
							if(maintab.rows[0].cells[i+1].innerHTML=="")
							{
								return;
							}
							else
							{
								tabaddone(2,countflag);
								iternum=0;
								break Loop;
							}
						}
					}else{alert("路口诀错误001");}
			}
		}
	}
}

function tabaddone(count,tabcount)
{	
	var classname;
	if(count==1)
	{	
		classname="tdimgred";
	}
	else if(count==2)
	{
		classname="tdimgblack";
	}
	else{alert("颜色参数错误!");}
	var taboneup;
	var tabonedown;
	if(tabcount==1)
	{
		taboneup=document.getElementById("tableoneup");	
		tabonedown=document.getElementById("tableonedown");
	}
	else if(tabcount==2)
	{
		taboneup=document.getElementById("tabletwoup");	
		tabonedown=document.getElementById("tabletwodown");
	}
	else if(tabcount==3)
	{
		taboneup=document.getElementById("tablethreeup");	
		tabonedown=document.getElementById("tablethreedown");
	}else{alert("路数参数错误!");}
	
	if(tabcell<=20)	
	{
		if(round==0)
		{
			if(tabrow<5)
			{
				if(tabcell==0&&tabrow==0)	
				{
					taboneup.rows[0].cells[0].className=classname;
					tabcolor=classname;
					tabrow=1;
				}
				else	
				{
					if(tabcolor==classname&&taboneup.rows[tabrow+1].cells[tabcell].className=="")
					{	
						taboneup.rows[tabrow].cells[tabcell].className=classname;
						tabcolor=classname;
						tabrow++;
					}
					else if(tabcolor==classname&&taboneup.rows[tabrow+1].cells[tabcell].className!="")
					{	
						taboneup.rows[tabrow].cells[tabcell].className=classname;
						tabcolor=classname;
						tabcellgo=tabcell+1;
						round=1;
					}
					else if(tabcolor!=classname)
					{	
						if(tabcell<20)
						{
							taboneup.rows[0].cells[tabcell+1].className=classname;
							tabcolor=classname;
							tabrow=1;
							tabcell++;
							round=0;
							tabcellgo=0;
						}
						else if(tabcell==20)
						{
							tabonedown.rows[0].cells[0].className=classname;
							tabcolor=classname;
							tabrow=1;
							tabcell++;
							round=0;
							tabcellgo=0;
						}
					}
				}
			}
			else if(tabrow==5)
			{
				if(tabcolor==classname)
				{
					taboneup.rows[tabrow].cells[tabcell].className=classname;
					tabcolor=classname;
					tabcellgo=tabcell+1;
					round=1;
				}
				else if(tabcolor!=classname) 
				{
					if(tabcell<20)
					{
						taboneup.rows[0].cells[tabcell+1].className=classname;
						tabcolor=classname;
						tabrow=1;
						tabcell++;
						round=0;
						tabcellgo=0;
					}
					else if(tabcell==20)
					{
						tabonedown.rows[0].cells[0].className=classname;
						tabcolor=classname;
						tabrow=1;
						tabcell++;
						round=0;
						tabcellgo=0;
					}
				}
			}
			
		}
		else if(round!=0&&tabcellgo<=20)	
		{
			if(tabcolor==classname)
			{
				taboneup.rows[tabrow].cells[tabcellgo].className=classname;
				tabcolor=classname;
				tabcellgo++;
			}
			else if(tabcolor!=classname)
			{
				if(tabcell<20)
				{
					taboneup.rows[0].cells[tabcell+1].className=classname;
					tabcolor=classname;
					tabrow=1;
					tabcell++;
					round=0;
					tabcellgo=0;
				}
				else if(tabcell==20)
				{
					tabonedown.rows[0].cells[0].className=classname;
					tabcolor=classname;
					tabrow=1;
					tabcell++;
					round=0;
					tabcellgo=0;
				}
			}
		}
		else if(round!=0&&tabcellgo>20&&tabcellgo<=41)	
		{
			if(tabcolor==classname)
			{
				tabonedown.rows[tabrow].cells[tabcellgo-21].className=classname;
				tabcolor=classname;
				tabcellgo++;
			}
			else if(tabcolor!=classname)
			{
				if(tabcell<20)
				{
					taboneup.rows[0].cells[tabcell+1].className=classname;
					tabcolor=classname;
					tabrow=1;
					tabcell++;
					round=0;
					tabcellgo=0;
				}
				else if(tabcell==20)
				{
					tabonedown.rows[0].cells[0].className=classname;
					tabcolor=classname;
					tabrow=1;
					tabcell++;
					round=0;
					tabcellgo=0;
				}
				
			}
		}
		
	}
	else if(tabcell>20&&tabcell<=41)
	{
		if(round==0)
		{
			if(tabrow<5)
			{
					if(tabcolor==classname&&tabonedown.rows[tabrow+1].cells[tabcell-21].className=="")
					{	
						tabonedown.rows[tabrow].cells[tabcell-21].className=classname;
						tabcolor=classname;
						tabrow++;
					}
					else if(tabcolor==classname&&tabonedown.rows[tabrow+1].cells[tabcell-21].className!="")
					{	
						tabonedown.rows[tabrow].cells[tabcell-21].className=classname;
						tabcolor=classname;
						tabcellgo=tabcell-21+1;
						round=1;
					}
					else if(tabcolor!=classname)
					{
						if(tabcell<=41)
						{
							tabonedown.rows[0].cells[tabcell-21+1].className=classname;
							tabcolor=classname;
							tabrow=1;
							tabcell++;
							round=0;
							tabcellgo=0;
							
						}
						
					}
			}
			else if(tabrow==5)
			{
				if(tabcolor==classname)		
				{
					tabonedown.rows[tabrow].cells[tabcell-21].className=classname;
					tabcolor=classname;
					tabcellgo=tabcell-21+1;
					round=1;
				}
				else if(tabcolor!=classname)	
				{
					if(tabcell<41)
					{
						tabonedown.rows[0].cells[tabcell-21+1].className=classname;
						tabcolor=classname;
						tabrow=1;
						tabcell++;
						round=0;
						tabcellgo=0;
					}
					else if(tabcell==41)  
					{
						alert("跳转超出tabonedown表范围");
					}
				}
			}
		}
		else if(round!=0&&tabcellgo<=20)
		{
			if(tabcellgo<20)
			{
				if(tabcolor==classname)
				{
					tabonedown.rows[tabrow].cells[tabcellgo].className=classname;
					tabcolor=classname;
					tabcellgo++;
				}
				else if(tabcolor!=classname)
				{
					if(tabcell<41)
					{
						taboneup.rows[0].cells[tabcell-21+1].className=classname;
						tabcolor=classname;
						tabrow=1;
						tabcell++;
						round=0;
						tabcellgo=0;
					}
					else if(tabcell==41)
					{
						alert("跳转超出tabonedown表范围2");
					}
					
				}
			}
			else if(tabcellgo==20)
			{
				if(tabcolor==classname)
				{
					tabonedown.rows[tabrow].cells[tabcellgo].className=classname;
					alert("操作已执行,拐弯添加已经到了下边表格的最后一列,不能继续向右添加");
				}
				else if(tabcolor!=classname)
				{
					if(tabcell<41)
					{
						tabonedown.rows[0].cells[tabcell-21+1].className=classname;
						tabcolor=classname;
						tabrow=1;
						tabcell++;
						round=0;
						tabcellgo=0;
					}
					else if(tabcell==41) 
					{
						alert("跳转超出tabonedown表范围");
					}
				}
			}
		}
	}
}

function tabcount()
{	 formercolor="";
	 addcell=0; 
	 addrow=0;
	 maintabclear();
	 
	var tablemainup=document.getElementById("tablemainup");
	var tablemaindown=document.getElementById("tablemaindown");
	var maintab=document.getElementById("maintab");
	for(var i=0;i<21;i++)
	{
		Loop: for(var j=0;j<6;j++)
		{
			if(j<5)
			{
				var self=tablemainup.rows[j].cells[i].className;
				var compare=tablemainup.rows[j+1].cells[i].className;
				if(self==compare&&compare!=""&&self!="")
				{
					addmaintab(self);
				}
				else if(self!=compare&&self!="")
				{	
					var right;
					if(i<20)
					{
						right=tablemainup.rows[j].cells[i+1].className;
						if(self==right)
						{
							for(var a=i;a<41;a++)
							{	
								var compare1;
								if(a<20)
								{
									compare1=tablemainup.rows[j].cells[a+1].className;
								}
								else if(a==20)
								{
									compare1=tablemaindown.rows[j].cells[0].className;
								}
								else if(a>20&&a<41)
								{
									compare1=tablemaindown.rows[j].cells[a-21+1].className;
								}
								if(self==compare1&&a<40)
								{
									addmaintab(self);
								}
								else if(self==compare1&&a==40)
								{
									addmaintab(self);
									addmaintab(compare1);
									break Loop;
								}
								else if(self!=compare1)
								{
									addmaintab(self);
									break Loop;
								}
							}
						}
						else if(self!=right)
						{
							addmaintab(self);
							break Loop;
						}
					}
					else if(i==20)
					{
						right=tablemaindown.rows[j].cells[0].className;
						if(self!=right&&self!="")
						{
							addmaintab(self);
							break Loop;
						}
						else if(self==right&&self!="")
						{
							addmaintab(self);
							for(var a=0;a<20;a++)
							{
								
								var compare1=tablemaindown.rows[j].cells[a+1].className;
								if(self==compare1&&a<19)
								{
									addmaintab(self);
								}
								else if(self==compare1&&a==19)
								{
									addmaintab(self);
									addmaintab(compare1);
									break Loop;  
								}
								else if(self!=compare1)
								{
									addmaintab(self);
									break Loop;
								}
							}
						}
					}
					
				}
				else if(self==""&&compare=="")
				{
					return;
				}
			}
			else if(j==5)
			{
				if(i<20)
				{	
					var self=tablemainup.rows[j].cells[i].className;
					var compare=tablemainup.rows[5].cells[i+1].className;
					if(self!=compare)
					{
						addmaintab(self);
						break Loop;
					}
					else if(self==compare&&self!="")
					{
						 for(var a=i;a<41;a++)
						{
							var compare1;
								if(a<20)
								{
									compare1=tablemainup.rows[j].cells[a+1].className;
								}
								else if(a==20)
								{
									compare1=tablemaindown.rows[j].cells[0].className;
								}
								else if(a>20&&a<41)
								{
									compare1=tablemaindown.rows[j].cells[a-21+1].className;
								}
								
								if(self==compare1&&a<40)
								{
									addmaintab(self);
								}
								else if(self==compare1&&a==40)
								{
									addmaintab(self);
									addmaintab(compare1);
								}
								else if(self!=compare1)
								{
									addmaintab(self);
									break Loop;
								}
						}
					}
				}
				else if(i==20)
				{
					compare=tablemaindown.rows[5].cells[0].className;
					if(self!=compare)
					{
						addmaintab(self);
					}
					else if(self==compare&&self!="")
					{
							addmaintab(self);
							for(var a=0;a<20;a++)
							{
								var compare1=tablemaindown.rows[j].cells[a+1].className;
								if(self==compare1&&a<19)
								{
									addmaintab(self);
								}
								else if(self==compare1&&a==19)
								{
									addmaintab(self);
									addmaintab(compare1);
									//break Loop;
								}
								else if(self!=compare1)
								{
									addmaintab(self);
									break Loop;
								}
							}
					}
				}else{alert("遍历主表格最后列错误");}
			}
		}
	}
	for(var i=0;i<21;i++)
	{
		Loop: for(var j=0;j<6;j++)
		{
			//
			if(j<5)
			{
				var self=tablemaindown.rows[j].cells[i].className;
				var compare=tablemaindown.rows[j+1].cells[i].className;
				if(self==compare&&compare!=""&&self!="")
				{
					addmaintab(self);
				}
				else if(self!=compare&&self!="")
				{	
					var right;
					if(i<20)
					{
						right=tablemaindown.rows[j].cells[i+1].className
						if(self==right&&self!="")
						{
							for(var a=i;a<20;a++)
							{
								var self1=tablemaindown.rows[j].cells[a].className;
								var compare1=tablemaindown.rows[j].cells[a+1].className;
								if(self1==compare1&&a<19)
								{
									addmaintab(self1);
								}
								else if(self1==compare1&&a==19)
								{
									addmaintab(self1);
									addmaintab(compare1);
									break Loop;
								}
								else if(self1!=compare1)
								{
									addmaintab(self1);
									break Loop;
								}
							}
						}
						else if(self!=right)
						{
							addmaintab(self);
							break Loop;
						}
					}
					else if(i==20)
					{
						addmaintab(self);
						break Loop;
					}
					
				}
				else if(self==""&&compare=="")
				{
					return;
				}
			}
			else if(j==5)
			{
				if(i<20)
				{	
					var self=tablemaindown.rows[j].cells[i].className;
					var compare=tablemaindown.rows[5].cells[i+1].className;
					if(self!=compare)
					{
						addmaintab(self);
						break Loop;
					}
					else if(self==compare&&self!="")
					{
						 for(var a=i;a<20;a++)
						{
							var self2=tablemaindown.rows[5].cells[a].className;
							var compare2=tablemaindown.rows[5].cells[a+1].className;
							if(self2==compare2&&a<19)
							{
								addmaintab(self2);
							}
							else if(self2==compare2&&a==19)
							{
								addmaintab(self2);
								addmaintab(compare2);
							}
							else if(self2!=compare2)
							{
								addmaintab(self2);
								break Loop;
							}
						}
					}
				}
				else if(i==20)
				{
					addmaintab(self);
				}else{alert("遍历主表格最后列错误");}
			}
			//
		}
	}
	
}

function addmaintab(self)
{	
	var maintab=document.getElementById("maintab");
	var count=0;
	if(self=="tdimgred")
	{
		count=1;
	}
	else if(self=="tdimgblack")
	{
		count=2;
	}
	else{alert("转化中间表错误!");}
	
	if(addcell==0&&addrow==0)
	{
		maintab.rows[0].cells[0].innerHTML=count;
		formercolor=self;
		addrow++;
	}
	else
	{
		if(formercolor==self)
		{
			maintab.rows[addrow].cells[addcell].innerHTML=count;
			addrow++;
		}
		else
		{
			maintab.rows[0].cells[addcell+1].innerHTML=count;
			formercolor=self;
			addrow=1;
			addcell++;
		}
	}
}
function maintabclear()
{
	for(var i=0;i<42;i++)
	{
		for(var j=0;j<36;j++)
		{
			maintab.rows[j].cells[i].innerHTML="";
		}
	}
}