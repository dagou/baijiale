var pencolor=1;
document.onkeydown=kclick2;
function document.oncontextmenu(){ 
  return false; 
}
function kclick2(){
	if(event.keyCode==16){
		if(pencolor==1){
			pencolor=2;
			document.getElementById("changecolor").className="penred";
		}else{
			pencolor=1;
			document.getElementById("changecolor").className="penblack";
		}
	}
}
function rclick(obj){
	if(event.button == 1){
		objpoint(obj,"tdimgred");
	}else if(event.button == 2){ 
		objpoint(obj,"tdimgblack");
	}
}
function kclick(obj){
	if(event.keyCode==27){
		if(confirm("ȷ��ɾ����?")){
			obj.className="";
			obj.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
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

	document.getElementById("printdiv").innerHTML="<OBJECT classid=CLSID:8856F961-340A-11D0-A96B-00C04FD705A2 height=0 id='WebBrowser' width=0 height=0/>";
	
	var table=document.getElementById("tb1");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			if(tdd.innerHTML=="&nbsp;")
			{
				tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
			}
		}
	}
	var table=document.getElementById("tb2");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			if(tdd.innerHTML=="&nbsp;")
			{
				tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
			}
		}
	}
	var table=document.getElementById("tb3");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			if(tdd.innerHTML=="&nbsp;")
			{
				tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
			}
		}
	}
	var table=document.getElementById("tb4");
	for(var i=0;i<6;i++){
		for(var j=0;j<21;j++){
			var tdd=table.rows[i].cells[j];
			addEventHandler(tdd,"keydown",kc(tdd));
			addEventHandler(tdd,"mousedown",rc(tdd));
			if(tdd.innerHTML=="&nbsp;")
			{
				tdd.innerHTML="<input type='text' value='' class='fontblack'  onKeyDown='changecolor(this)'/>";
			}
		}
	}
	
	
}
function addEventHandler(oTarget, sEventType, fnHandler){
    if (oTarget.addEventListener) { //Mozilla, Netscape, Firefox
    	oTarget.addEventListener(sEventType, fnHandler, false);   
    } else if (oTarget.attachEvent) {   //IE 
    	oTarget.attachEvent("on" + sEventType, fnHandler);   
    } else {   
    	oTarget["on" + sEventType] = fnHandler;
    }   
}

function objpoint(obj,str){
	var table=obj.parentNode.parentNode.parentNode;
	var i=obj.parentNode.rowIndex;
	var j=obj.cellIndex;
	table.rows[i].cells[j].className=str;
}
function count()  
{
	tabcount("up");//�����ϱ�����С��tb1��tb2����һ���м��maintab
	checkMain();
	
}

var formercolor="";
var addcell=0; 
var addrow=0; 

var uprm1=0;
var uprm2=0;
var uprm3=0;
var uprm4=0;
var uprm5=0;
var downrm1=0;
var downrm2=0;
var downrm3=0;
var downrm4=0;
var downrm5=0;

function checkMain()
{	
	var winM=0;
	var loseM=0;
	var bankerV=0;
	
	var winc=0;
	var losec=0;
	
	var thjump=0;
	var forlink=0;
	
	var linkc=0;
	var jumpc=0;
	
		
	var maintab=document.getElementById("maintab");
	for(var i=0;i<42;i++)
	{
		for(var j=0;j<36;j++)
		{
			var temp=maintab.rows[j].cells[i].innerHTML;
			if(temp!=""&&temp!=null)
			{
				var arr=temp.split(",");
				
				if(arr[1]=="fontblack"&&arr[2]!=""&&arr[2]!=null)
				{
					loseM+=parseFloat(arr[2]);
					losec++; 
				}
				else if(arr[1]=="fontred"&&arr[2]!=""&&arr[2]!=null)
				{
					winM+=parseFloat(arr[2]);
					winc++;
				}
				
				if(arr[0]==1&&arr[1]=="fontred")
				{
					bankerV+=parseFloat(arr[2])*0.05;
				}
			}
			
		}
	}
	
	document.getElementById("winMoney").value=winM+"��";
	document.getElementById("loseMoney").value=loseM+"��";
	 uprm1=Math.round((winM-loseM)*100)/100;
	if(uprm1>=0){resultMoney.style.color="red";}else{resultMoney.style.color="black";}
	document.getElementById("resultMoney").value=Math.abs(uprm1)+"��";
	document.getElementById("winMoney2").value=winM+"��";
	document.getElementById("loseMoney2").value=loseM+"��";
	resultMoney2.style.color=resultMoney.style.color;
	document.getElementById("resultMoney2").value=Math.abs(uprm1)+"��";
	
	winCount.value=winc;
	loseCount.value=losec;
	uprm4=winc-losec;
	if(uprm4>=0){resultCount.style.color="red";}else{resultCount.style.color="black";}
	resultCount.value=Math.abs(uprm4);
	winCount2.value=winc;
	loseCount2.value=losec;
	resultCount2.style.color=resultCount.style.color;
	resultCount2.value=Math.abs(uprm4);
	
	pumpV.value=Math.round(bankerV*100)/100+"��";
	resultPu.value=pumpV.value;
	
	payV.value=Math.round((winM<loseM?winM:loseM)*0.008*100)/100+"��";
	resultPa.value=payV.value;
	
	uprm2=Math.round((winM-loseM-Math.round(bankerV*100)/100)*100)/100
	if(uprm2>=0){netV.style.color="red";}else{netV.style.color="black";}
	netV.value=Math.abs(uprm2)+"��";
	resultN.style.color=netV.style.color;
	resultN.value=Math.abs(uprm2)+"��";
	
	uprm3=Math.round((winM-loseM-Math.round(bankerV*100)/100+(winM<loseM?winM:loseM)*0.008)*100)/100;
	if(uprm3>=0){allV.style.color="red";}else{allV.style.color="black";}
	allV.value=Math.abs(uprm3)+"��";
	resultA.style.color=allV.style.color;
	resultA.value=Math.abs(uprm3)+"��";
	
	for(var i=0;i<41;i++)  
	{
		var temp0=maintab.rows[0].cells[i].innerHTML;
		var temp1=maintab.rows[1].cells[i].innerHTML;
		var temp2=maintab.rows[2].cells[i].innerHTML;
		var temp3=maintab.rows[3].cells[i].innerHTML;
		var temp4=maintab.rows[4].cells[i].innerHTML;
		var tempr=maintab.rows[0].cells[i+1].innerHTML;
		
		if(temp0!=""&&tempr!="")
		{
			if(temp0.split(",")[0]==temp1.split(",")[0]&&temp0.split(",")[0]==temp2.split(",")[0]&&temp0.split(",")[0]==temp3.split(",")[0])
			{
				if(temp4=="")
				{
					forlink++;
				}
			}
		}
	}
	forL.value=forlink;
	refor.value=forlink;
	
	for(var i=0;i<39;i++)
	{
		if(i==0)
		{	
			var temp0=maintab.rows[0].cells[0].innerHTML;  
			var temp00=maintab.rows[1].cells[0].innerHTML;
			if(temp0!=""&&temp0!=null&&temp00=="")
			{
				var temp1=maintab.rows[0].cells[1].innerHTML; 
				var temp11=maintab.rows[1].cells[1].innerHTML; 
				if(temp1!=""&&temp1!=null&&temp11=="") 
				{
					var temp2=maintab.rows[0].cells[2].innerHTML; 
					var temp22=maintab.rows[1].cells[2].innerHTML;
					if(temp2!=""&&temp2!=null&&temp=="")
					{
						var temp3=maintab.rows[0].cells[3].innerHTML; 
						var temp33=maintab.rows[1].cells[3].innerHTML;
						if(temp3!=""&&temp3!=null&&temp33!="")
						{
							thjump++;
						}
					}
				}
			}
			
		}
		else
		{
			var temp0=maintab.rows[0].cells[i].innerHTML;  
			var temp00=maintab.rows[1].cells[i].innerHTML;
			var temp000=maintab.rows[1].cells[i-1].innerHTML;
			if(temp0!=""&&temp0!=null&&temp00==""&&temp000!="")
			{
				
				var temp1=maintab.rows[0].cells[i+1].innerHTML; 
				var temp11=maintab.rows[1].cells[i+1].innerHTML; 
				if(temp1!=""&&temp1!=null&&temp11=="") 
				{
					var temp2=maintab.rows[0].cells[i+2].innerHTML; 
					var temp22=maintab.rows[1].cells[i+2].innerHTML;
					if(temp2!=""&&temp2!=null&&temp=="")
					{
						var temp3=maintab.rows[0].cells[i+3].innerHTML; 
						var temp33=maintab.rows[1].cells[i+3].innerHTML;
						if(temp3!=""&&temp3!=null&&temp33!="")
						{
							thjump++;
						}
					}
				}
			}
		}
	}
	thV.value=thjump;
	reth.value=thjump;
	
	for(var i=0;i<41;i++)
	{
		var temp=maintab.rows[0].cells[i].innerHTML;
		var temp1=maintab.rows[1].cells[i].innerHTML;
		var temp2=maintab.rows[0].cells[i+1].innerHTML;
		if(temp!=""&&temp1==""&&temp2!="")
		{
			jumpc++;
		}
		else if(temp!=""&&temp1!=""&&temp2!="")
		{
			linkc++;
		}
	}
	linkV.value=linkc;
	jumpV.value=jumpc;
	var rm5=linkc-jumpc;
	if(rm5>=0){resultMis.style.color="red";}else{resultMis.style.color="black";}
	resultMis.value=Math.abs(rm5);
	resultLJ.style.color=resultMis.style.color;
	resultLJ.value=Math.abs(rm5);
	
	
	tabcount("down");//�����±�����С��tb3��tb4����һ���м��maintab
	checkMain2();
}

function checkMain2()
{	
	var winM=0;
	var loseM=0;
	var bankerV=0;
	
	var winc=0;
	var losec=0;
	
	var thjump=0;
	var forlink=0;
	
	var linkc=0;
	var jumpc=0;
	
		
	var maintab=document.getElementById("maintab");
	for(var i=0;i<42;i++)
	{
		for(var j=0;j<36;j++)
		{
			var temp=maintab.rows[j].cells[i].innerHTML;
			if(temp!=""&&temp!=null)
			{
				var arr=temp.split(",");
				
				if(arr[1]=="fontblack"&&arr[2]!=""&&arr[2]!=null)
				{
					loseM+=parseFloat(arr[2]);
					losec++; 
				}
				else if(arr[1]=="fontred"&&arr[2]!=""&&arr[2]!=null)
				{
					winM+=parseFloat(arr[2]);
					winc++;
				}
				
				if(arr[0]==1&&arr[1]=="fontred")
				{
					bankerV+=parseFloat(arr[2])*0.05;
				}
			}
			
		}
	}
	
	document.getElementById("dwinMoney").value=winM+"��";
	document.getElementById("dloseMoney").value=loseM+"��";
	downrm1=Math.round((winM-loseM)*100)/100;
	if(downrm1>=0){dresultMoney.style.color="red";}else{dresultMoney.style.color="black";}
	document.getElementById("dresultMoney").value=Math.abs(downrm1)+"��";
	document.getElementById("dwinMoney2").value=winM+"��";
	document.getElementById("dloseMoney2").value=loseM+"��";
	dresultMoney2.style.color=dresultMoney.style.color;
	document.getElementById("dresultMoney2").value=Math.abs(downrm1)+"��";
	
	dwinCount.value=winc;
	dloseCount.value=losec;
	downrm4=winc-losec;
	if(downrm4>=0){dresultCount.style.color="red";}else{dresultCount.style.color="black";}
	dresultCount.value=Math.abs(downrm4);
	dwinCount2.value=winc;
	dloseCount2.value=losec;
	dresultCount2.style.color=dresultCount.style.color;
	dresultCount2.value=Math.abs(downrm4);
	
	dpumpV.value=Math.round(bankerV*100)/100+"��";
	dresultPu.value=dpumpV.value;
	
	dpayV.value=Math.round((winM<loseM?winM:loseM)*0.008*100)/100+"��";
	dresultPa.value=dpayV.value;
	
	downrm2=Math.round((winM-loseM-Math.round(bankerV*100)/100)*100)/100
	if(downrm2>=0){dnetV.style.color="red";}else{dnetV.style.color="black";}
	dnetV.value=Math.abs(downrm2)+"��";
	dresultN.style.color=dnetV.style.color;
	dresultN.value=Math.abs(downrm2)+"��";
	
	downrm3=Math.round((winM-loseM-Math.round(bankerV*100)/100+(winM<loseM?winM:loseM)*0.008)*100)/100;
	if(downrm3>=0){dallV.style.color="red";}else{dallV.style.color="black";}
	dallV.value=Math.abs(downrm3)+"��";
	dresultA.style.color=dallV.style.color;
	dresultA.value=Math.abs(downrm3)+"��";
	
	for(var i=0;i<41;i++)  
	{
		var temp0=maintab.rows[0].cells[i].innerHTML;
		var temp1=maintab.rows[1].cells[i].innerHTML;
		var temp2=maintab.rows[2].cells[i].innerHTML;
		var temp3=maintab.rows[3].cells[i].innerHTML;
		var temp4=maintab.rows[4].cells[i].innerHTML;
		var tempr=maintab.rows[0].cells[i+1].innerHTML;
		
		if(temp0!=""&&tempr!="")
		{
			if(temp0.split(",")[0]==temp1.split(",")[0]&&temp0.split(",")[0]==temp2.split(",")[0]&&temp0.split(",")[0]==temp3.split(",")[0])
			{
				if(temp4=="")
				{
					forlink++;
				}
			}
		}
	}
	dforL.value=forlink;
	drefor.value=forlink;
	
	for(var i=0;i<39;i++)
	{
		if(i==0)
		{	
			var temp0=maintab.rows[0].cells[0].innerHTML;  //1
			var temp00=maintab.rows[1].cells[0].innerHTML;
			if(temp0!=""&&temp0!=null&&temp00=="")
			{
				var temp1=maintab.rows[0].cells[1].innerHTML; //2
				var temp11=maintab.rows[1].cells[1].innerHTML; 
				if(temp1!=""&&temp1!=null&&temp11=="") 
				{
					var temp2=maintab.rows[0].cells[2].innerHTML; //3
					var temp22=maintab.rows[1].cells[2].innerHTML;
					if(temp2!=""&&temp2!=null&&temp=="")
					{
						var temp3=maintab.rows[0].cells[3].innerHTML; //4
						var temp33=maintab.rows[1].cells[3].innerHTML;
						if(temp3!=""&&temp3!=null&&temp33!="")
						{
							thjump++;
						}
					}
				}
			}
			
		}
		else
		{
			var temp0=maintab.rows[0].cells[i].innerHTML;  //1
			var temp00=maintab.rows[1].cells[i].innerHTML;
			var temp000=maintab.rows[1].cells[i-1].innerHTML;
			if(temp0!=""&&temp0!=null&&temp00==""&&temp000!="")
			{
				
				var temp1=maintab.rows[0].cells[i+1].innerHTML; //2
				var temp11=maintab.rows[1].cells[i+1].innerHTML; 
				if(temp1!=""&&temp1!=null&&temp11=="") 
				{
					var temp2=maintab.rows[0].cells[i+2].innerHTML; //3
					var temp22=maintab.rows[1].cells[i+2].innerHTML;
					if(temp2!=""&&temp2!=null&&temp=="")
					{
						var temp3=maintab.rows[0].cells[i+3].innerHTML; //4
						var temp33=maintab.rows[1].cells[i+3].innerHTML;
						if(temp3!=""&&temp3!=null&&temp33!="")
						{
							thjump++;
						}
					}
				}
			}
		}
	}
	dthV.value=thjump;
	dreth.value=thjump;
	
	for(var i=0;i<41;i++)
	{
		var temp=maintab.rows[0].cells[i].innerHTML;
		var temp1=maintab.rows[1].cells[i].innerHTML;
		var temp2=maintab.rows[0].cells[i+1].innerHTML;
		if(temp!=""&&temp1==""&&temp2!="")
		{
			jumpc++;
		}
		else if(temp!=""&&temp1!=""&&temp2!="")
		{
			linkc++;
		}
	}
	dlinkV.value=linkc;
	djumpV.value=jumpc;
	downrm5=linkc-jumpc;
	if(downrm5>=0){dresultMis.style.color="red";}else{dresultMis.style.color="black";}
	dresultMis.value=Math.abs(downrm5);
	dresultLJ.style.color=dresultMis.style.color;
	dresultLJ.value=Math.abs(downrm5);
	
	
}

function tabcount(flag)
{	 formercolor="";
	 addcell=0; 
	 addrow=0;
	 maintabclear();
	 
	var tablemainup;
	var tablemaindown;
	var fc="";
	var val="";
	if(flag=="up")
	{
		tablemainup=document.getElementById("tb1");
		tablemaindown=document.getElementById("tb2");
	}
	else if(flag=="down")
	{
		tablemainup=document.getElementById("tb3");
		tablemaindown=document.getElementById("tb4");
	}
	
	for(var i=0;i<21;i++)
	{
		Loop: for(var j=0;j<6;j++)
		{
			if(j<5)
			{
				var self=tablemainup.rows[j].cells[i].className;
				fc=tablemainup.rows[j].cells[i].firstChild.className;
				val=tablemainup.rows[j].cells[i].firstChild.value;
				var compare=tablemainup.rows[j+1].cells[i].className;
				if(self==compare&&compare!=""&&self!="")
				{
					addmaintab(self,fc,val);
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
									fc=tablemainup.rows[j].cells[a].firstChild.className;
									val=tablemainup.rows[j].cells[a].firstChild.value;
								}
								else if(a==20)
								{
									compare1=tablemaindown.rows[j].cells[0].className;
									fc=tablemainup.rows[j].cells[20].firstChild.className;
									val=tablemainup.rows[j].cells[20].firstChild.value;
								}
								else if(a>20&&a<41)
								{
									compare1=tablemaindown.rows[j].cells[a-21+1].className;
									fc=tablemaindown.rows[j].cells[a-21].firstChild.className;
									val=tablemaindown.rows[j].cells[a-21].firstChild.value;
								}
								if(self==compare1&&a<40)
								{
									addmaintab(self,fc,val);
								}
								else if(self==compare1&&a==40)
								{
									addmaintab(self,fc,val);
									fc=tablemaindown.rows[j].cells[20].firstChild.className;
									val=tablemaindown.rows[j].cells[20].firstChild.value;
									addmaintab(compare1,fc,val);
									break Loop;
								}
								else if(self!=compare1)
								{
									addmaintab(self,fc,val);
									break Loop;
								}
							}
						}
						else if(self!=right)
						{
							addmaintab(self,fc,val);
							break Loop;
						}
					}
					else if(i==20)
					{
						right=tablemaindown.rows[j].cells[0].className;
						fc=tablemainup.rows[j].cells[20].firstChild.className;
						val=tablemainup.rows[j].cells[20].firstChild.value;
						if(self!=right&&self!="")
						{
							addmaintab(self,fc,val);
							break Loop;
						}
						else if(self==right&&self!="")
						{
							addmaintab(self,fc,val);
							for(var a=0;a<20;a++)
							{
								
								var compare1=tablemaindown.rows[j].cells[a+1].className;
								fc=tablemaindown.rows[j].cells[a].firstChild.className;
								val=tablemaindown.rows[j].cells[a].firstChild.value;
								if(self==compare1&&a<19)
								{
									addmaintab(self,fc,val);
								}
								else if(self==compare1&&a==19)
								{
									addmaintab(self,fc,val);
									fc=tablemaindown.rows[j].cells[20].firstChild.className;
								    val=tablemaindown.rows[j].cells[20].firstChild.value;
									addmaintab(compare1,fc,val);
									break Loop; 
								}
								else if(self!=compare1)
								{
									addmaintab(self,fc,val);
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
					fc=tablemainup.rows[j].cells[i].firstChild.className;
					val=tablemainup.rows[j].cells[i].firstChild.value;
					var compare=tablemainup.rows[5].cells[i+1].className;
					if(self!=compare)
					{
						addmaintab(self,fc,val);
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
									fc=tablemainup.rows[j].cells[a].firstChild.className;
									val=tablemainup.rows[j].cells[a].firstChild.value;
								}
								else if(a==20)
								{
									compare1=tablemaindown.rows[j].cells[0].className;
									fc=tablemainup.rows[j].cells[20].firstChild.className;
									val=tablemainup.rows[j].cells[20].firstChild.value;
								}
								else if(a>20&&a<41)
								{
									compare1=tablemaindown.rows[j].cells[a-21+1].className;
									fc=tablemaindown.rows[j].cells[a-21].firstChild.className;
									val=tablemaindown.rows[j].cells[a-21].firstChild.value;
								}
								
								if(self==compare1&&a<40)
								{
									addmaintab(self,fc,val);
								}
								else if(self==compare1&&a==40)
								{
									addmaintab(self,fc,val);
									fc=tablemaindown.rows[j].cells[20].firstChild.className;
									val=tablemaindown.rows[j].cells[20].firstChild.value;
									addmaintab(compare1,fc,val);
								}
								else if(self!=compare1)
								{
									addmaintab(self,fc,val);
									break Loop;
								}
						}
					}
				}
				else if(i==20)
				{
					compare=tablemaindown.rows[5].cells[0].className;
					fc=tablemainup.rows[j].cells[20].firstChild.className;
					val=tablemainup.rows[j].cells[20].firstChild.value;
					if(self!=compare)
					{
						addmaintab(self,fc,val);
					}
					else if(self==compare&&self!="")
					{
							addmaintab(self,fc,val);
							for(var a=0;a<20;a++)
							{
								var compare1=tablemaindown.rows[j].cells[a+1].className;
								fc=tablemaindown.rows[j].cells[a].firstChild.className;
								val=tablemaindown.rows[j].cells[a].firstChild.value;
								if(self==compare1&&a<19)
								{
									addmaintab(self,fc,val);
								}
								else if(self==compare1&&a==19)
								{
									addmaintab(self,fc,val);
									fc=tablemaindown.rows[j].cells[20].firstChild.className;
								    val=tablemaindown.rows[j].cells[20].firstChild.value;
									addmaintab(compare1,fc,val);
									//break Loop;
								}
								else if(self!=compare1)
								{
									addmaintab(self,fc,val);
									break Loop;
								}
							}
					}
				}else{alert("�������������д���");}
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
				fc=tablemaindown.rows[j].cells[i].firstChild.className;
				val=tablemaindown.rows[j].cells[i].firstChild.value;
				if(self==compare&&compare!=""&&self!="")
				{
					addmaintab(self,fc,val);
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
								fc=tablemaindown.rows[j].cells[a].firstChild.className;
								val=tablemaindown.rows[j].cells[a].firstChild.value;
								if(self1==compare1&&a<19)
								{
									addmaintab(self1,fc,val);
								}
								else if(self1==compare1&&a==19)
								{
									addmaintab(self1,fc,val);
									fc=tablemaindown.rows[j].cells[20].firstChild.className;
									val=tablemaindown.rows[j].cells[20].firstChild.value;
									addmaintab(compare1,fc,val);
									break Loop;
								}
								else if(self1!=compare1)
								{
									addmaintab(self1,fc,val);
									break Loop;
								}
							}
						}
						else if(self!=right)
						{
							addmaintab(self,fc,val);
							break Loop;
						}
					}
					else if(i==20)
					{
						addmaintab(self,fc,val);
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
					fc=tablemaindown.rows[j].cells[i].firstChild.className;
					val=tablemaindown.rows[j].cells[i].firstChild.value;
					if(self!=compare)
					{
						addmaintab(self,fc,val);
						break Loop;
					}
					else if(self==compare&&self!="")
					{
						 for(var a=i;a<20;a++)
						{
							var self2=tablemaindown.rows[5].cells[a].className;
							var compare2=tablemaindown.rows[5].cells[a+1].className;
							fc=tablemaindown.rows[j].cells[a].firstChild.className;
							val=tablemaindown.rows[j].cells[a].firstChild.value;
							if(self2==compare2&&a<19)
							{
								addmaintab(self2,fc,val);
							}
							else if(self2==compare2&&a==19)
							{
								addmaintab(self2,fc,val);
								fc=tablemaindown.rows[j].cells[20].firstChild.className;
								val=tablemaindown.rows[j].cells[20].firstChild.value;
								addmaintab(compare2,fc,val);
							}
							else if(self2!=compare2)
							{
								addmaintab(self2,fc,val);
								break Loop;
							}
						}
					}
				}
				else if(i==20)
				{
					addmaintab(self,fc,val);
				}else{alert("�������������д���");}
			}
		}
	}
	
}

function addmaintab(self,fc,val)
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
	else{alert("ת���м�����!");}
	
	if(addcell==0&&addrow==0)
	{
		maintab.rows[0].cells[0].innerHTML=count+","+fc+","+val;
		formercolor=self;
		addrow++;
	}
	else
	{
		if(formercolor==self)
		{
			maintab.rows[addrow].cells[addcell].innerHTML=count+","+fc+","+val;
			addrow++;
		}
		else
		{
			maintab.rows[0].cells[addcell+1].innerHTML=count+","+fc+","+val;
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
function save(){    
    date1.innerHTML=nameV.value+","+nameV2.value+","+nameV3.value+","+winMoney.value.replace("��","")+","+
					loseMoney.value.replace("��","")+","+uprm1+","+
					pumpV.value.replace("��","")+","+payV.value.replace("��","")+","+
					uprm5+","+thV.value.replace("��","")+","+
					forL.value.replace("��","")+","+winCount.value.replace("��","")+","+
					loseCount.value.replace("��","")+","+uprm4+","+
					uprm2+","+uprm3;
	
	date2.innerHTML=dnameV2.value+","+dnameV3.value+","+dwinMoney.value.replace("��","")+","+
					dloseMoney.value.replace("��","")+","+downrm1+","+
					dpumpV.value.replace("��","")+","+dpayV.value.replace("��","")+","+
					downrm5+","+dthV.value.replace("��","")+","+
					dforL.value.replace("��","")+","+dwinCount.value.replace("��","")+","+
					dloseCount.value.replace("��","")+","+downrm4+","+
					downrm2+","+downrm3;
					
	
	 
	var strHTML =document.documentElement.outerHTML;
	var   winSave   =   window.open(); 
	winSave.document.open("text/html","utf-8");   
    winSave.document.write(strHTML);   
    winSave.document.execCommand("SaveAs",true,"f:\\ͳ��.html");   
    winSave.close();  
	
	
}
function importPage(){
 importdiv.style.top=document.body.clientHeight/2-75;
 importdiv.style.left = document.body.clientWidth/2-200;
 importdiv.style.display="block";
}
function colsebtn()
{
	importdiv.style.display="none";
	selectDiv.style.display="none";
	clearfile();
}
function printPage(){
 document.getElementById("WebBrowser").ExecWB(7,1);

}
function clearfile()
{
	form1.reset();
}

function opendiv(obj)
{
	var path=document.getElementById("filesrc").value;
	 if(path!="")
	 {
		 obj1 = obj.getBoundingClientRect();
		 x=obj1.left;   
		 y=obj1.top;
		 selectDiv.style.left=x-2;
		 selectDiv.style.top=y+18;
		 selectDiv.style.display="block";
	 }
	 else
	 {
		alert("����ѡ��xml�ļ���·��!");
	 }
}
function closediv()
{
	selectDiv.style.display="none";
	return false;
}
function clicksel()
{
	var val=filesel.value;
	document.getElementById("filena").value=val;
	
	selectDiv.style.display="none";
}
function changesrc()  
{
	var path=document.getElementById("filesrc").value;
	var subpath = path.substring(path.length-3,path.length);
	if(path!=null&&path!="")
	{
		if(subpath=="xml")
		{
			var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");  
			var mode="�ټ�����Ϣ�洢";
			xmlDoc.async="false";    
			xmlDoc.load(path);
			var rootName = xmlDoc.getElementsByTagName(mode)[0]; 
			var maxNum = rootName.childNodes.length; 
			if(maxNum>0)
			{
				clearSelect();
				for(var i=0;i<maxNum;i++)
				{
					var subna=rootName.childNodes[i].nodeName;
					var sele=document.getElementById("filesel");
					sele.options.add(new Option(subna,subna)); 
				}
			}
			else
			{
				alert("xml�ļ���������!");
			}
		}
		else
		{
			alert("��ѡ����ȷ��xml�ļ�!");
		}
	}
}
function clearSelect() 
{
	var temp=document.getElementById("filesel");
	var length=temp.length;
	if(length>0)
	{
		for(var i=0;i<length;i++)
		{
			temp.remove(0);
		}
	}
}
function importXML()
{
	var src=document.getElementById("filesrc").value;
	var filename=document.getElementById("filena").value;
	if(src==""||src==null)
	{
		alert("xml�ļ�·������Ϊ��!");
	}
	else if(filename==""||filename==null)
	{
		alert("������Ҫ������ļ�����!");
	}
	else
	{
	    colsebtn();
		clearTb();
		var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");  
		var mode=filename;
		xmlDoc.async="false";    
		xmlDoc.load(src);
		var nodeName=xmlDoc.getElementsByTagName(mode)[0]; 
		var subnode=nodeName.childNodes[0];  
		
		var tabone=subnode.childNodes[0].text;  
		var arr1=tabone.split(";");
		addDate(1,arr1);
		
		var tabtwo=subnode.childNodes[1].text;  
		var arr2=tabtwo.split(";");
		addDate(2,arr2);
		
		var tabthree=subnode.childNodes[2].text;  
		var arr3=tabtwo.split(";");
		addDate(3,arr3);
		
		var tabfour=subnode.childNodes[3].text;  
		var arr4=tabtwo.split(";");
		addDate(4,arr4);
		
		count();
	}
	
	
}
function addDate(a,arr) 
{
	var tab;
	switch(a)
	{
		case 1: tab=document.getElementById("tb1"); break;
		case 2: tab=document.getElementById("tb2"); break;
		case 3: tab=document.getElementById("tb3"); break;
		case 4: tab=document.getElementById("tb4"); break;
	}
	for(var j=0;j<6;j++)   
	{
		for(var i=0;i<21;i++)  
		{
			var val=arr[j*21+i];
			if(val!="null")  
			{
				var str=val.split(",");
				if(str[0]!="null")  
				{
					tab.rows[j].cells[i].className=str[0];
				}
				if(str[1]!="null")  
				{
					tab.rows[j].cells[i].firstChild.className=str[1];
				}
				if(str[2]!="null")  
				{
					tab.rows[j].cells[i].firstChild.value=str[2];
				}
			}
		}
	}
}
function clearTb()  
{
	for(var i=0;i<21;i++)
	{
		for(var j=0;j<6;j++)
		{
			tb1.rows[j].cells[i].className="";
			tb1.rows[j].cells[i].firstChild.className="fontblack";
			tb1.rows[j].cells[i].firstChild.value="";
			tb2.rows[j].cells[i].className="";
			tb2.rows[j].cells[i].firstChild.className="fontblack";
			tb2.rows[j].cells[i].firstChild.value="";
			tb3.rows[j].cells[i].className="";
			tb3.rows[j].cells[i].firstChild.className="fontblack";
			tb3.rows[j].cells[i].firstChild.value="";
			tb4.rows[j].cells[i].className="";
			tb4.rows[j].cells[i].firstChild.className="fontblack";
			tb4.rows[j].cells[i].firstChild.value="";
		}
	}
}