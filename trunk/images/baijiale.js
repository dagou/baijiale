/**************************************************************
*	baijiale
**************************************************************/

/**
 * Title:baijiale
 * Description:
 * Created on 2009-08-24
 * @author dfinger
 * @Email:dfinger@gmail.com
 * @version 0.1
 * Modify on 
 * Description:
 * Finished on 
 */
 
var winFlag=1;//输赢的标记，1为胜局，此时输入为红字
var bFlag=1;//庄闲标记，1为庄家，此时用红圈
var rowLeg =6;//此表共有15行;
var cellLeg = 21;//此表共有21列；
var ok=0;
var saveNum=0;
mapred = new Map();
mapblack = new Map();
function yunsuan(a, how, b) {// 正确浮点运算
	if (a.toString().indexOf(".") < 0 && b.toString().indexOf(".") < 0) {// 没小数
		//alert(a + how + b);
        return eval(a + how + b);
	}
	// 至少一个有小数
	var alen = a.toString().split(".");
	if (alen.length == 1) {// 没有小数
		alen = 0;
	} else {
		alen = alen[1].length;
	}
	var blen = b.toString().split(".");
	if (blen.length == 1) {
		blen = 0;
	} else {
		blen = blen[1].length;
	}
	if (blen > alen)
		alen = blen;
	blen = "1";
	for (; alen > 0; alen--) {// 创建一个相应的倍数
		blen = blen + "0";
	}
	switch (how) {
		case "+" :
			return (a * blen + b * blen) / blen;
			break;
		case "-" :
			return (a * blen - b * blen) / blen;
			break;
		case "*" :
			return ((a * blen) * (b * blen)) / (blen * blen);
			break;
		default :
			//alert("你要求的\t" + how + "\t运算未完成!");
			return eval(a + how + b);
	}
}

function FormatAfterDotNumber(ValueString, nAfterDotNum) {
	var ValueString, nAfterDotNum;
	var resultStr, nTen;
	ValueString = "" + ValueString + "";
	strLen = ValueString.length;
	dotPos = ValueString.indexOf(".", 0);//
	if (dotPos == -1) {// 判断有没有小数点
		resultStr = ValueString + ".";
		for (i = 0; i < nAfterDotNum; i++) {
			resultStr = resultStr + "0";// 没有小数点的话直接补零
		}
		return resultStr;
	} else {
		if ((strLen - dotPos - 1) >= nAfterDotNum) {
			nAfter = dotPos + nAfterDotNum + 1;
			nTen = 1;
			for (j = 0; j < nAfterDotNum; j++) {
				nTen = nTen * 10;
			}
			resultStr = Math.round(parseFloat(ValueString) * nTen) / nTen;
			return resultStr;
		} else {
			resultStr = ValueString;
			for (i = 0; i < (nAfterDotNum - strLen + dotPos + 1); i++) {
				resultStr = resultStr + "0";
			}
			return resultStr;
		}
	}
}

function init(){
//var table = document.createElement("table");
//生成第一个表格
var table = document.getElementById("tb1"); 
table.setAttribute("border","1"); 
table.setAttribute("width","672"); 
//table.setAttribute("class","tab-content"); 
//table.setAttribute("id","tb1");
//document.body.appendChild(table);
//var header = table.createTHead(); 
for (var i=0;i<rowLeg;i++) { 
//var headerrow = header.insertRow(i); 
var headerrow = table.insertRow(); 
headerrow.className="size11";
//headerrow.setAttribute("height","25");
for (var j=0;j<cellLeg;j++){
var cell = headerrow.insertCell();
cell.setAttribute("width","5");
cell.className="size10";
//cell.setAttribute("align","center");
//var text = document.createElement("text");
cell.innerHTML='<input  type="text"   name="tt[]"  class="size12" onclick="editText(this)">'; 
//cell.appendChild(text);
//cell.firstChild.color='red';
//cell.firstChild.onclick=editText();
                       }

    }
//生成第二个表格
var table = document.getElementById("tb2"); 
table.setAttribute("border","1"); 
table.setAttribute("width","672"); 
//table.setAttribute("class","tab-content"); 
//table.setAttribute("id","tb1");
//document.body.appendChild(table);
//var header = table.createTHead(); 
for (var i=0;i<rowLeg;i++) { 
//var headerrow = header.insertRow(i); 
var headerrow = table.insertRow(); 
headerrow.className="size11";
for (var j=0;j<cellLeg;j++){
var cell = headerrow.insertCell();
cell.setAttribute("width","5");
//var text = document.createElement("text");
cell.innerHTML='<input  type="text"   name="tt[]"  class="size12" onclick="editText(this)">'; 
//cell.appendChild(text);
//cell.firstChild.color='red';
//cell.firstChild.onclick=editText();
                       }

    } 
//生成第三个表格
var table = document.getElementById("tb3"); 
table.setAttribute("border","1"); 
table.setAttribute("width","672"); 
//table.setAttribute("class","tab-content"); 
//table.setAttribute("id","tb1");
//document.body.appendChild(table);
//var header = table.createTHead(); 
for (var i=0;i<rowLeg;i++) { 
//var headerrow = header.insertRow(i); 
var headerrow = table.insertRow(); 
headerrow.className="size11";
for (var j=0;j<cellLeg;j++){
var cell = headerrow.insertCell();
cell.setAttribute("width","5");
//var text = document.createElement("text");
cell.innerHTML='<input  type="text"   name="tt[]"  class="size12" onclick="editText(this)">'; 
//cell.appendChild(text);
//cell.firstChild.color='red';
//cell.firstChild.onclick=editText();
                       }

    } 

//生成第四个表格
var table = document.getElementById("tb4"); 
table.setAttribute("border","1"); 
table.setAttribute("width","672"); 
//table.setAttribute("class","tab-content"); 
//table.setAttribute("id","tb1");
//document.body.appendChild(table);
//var header = table.createTHead(); 
for (var i=0;i<rowLeg;i++) { 
//var headerrow = header.insertRow(i); 
var headerrow = table.insertRow(); 
headerrow.className="size11";
for (var j=0;j<cellLeg;j++){
var cell = headerrow.insertCell();
cell.setAttribute("width","5");
//var text = document.createElement("text");
cell.innerHTML='<input  type="text"   name="tt[]"  class="size12" onclick="editText(this)">'; 
//cell.appendChild(text);
//cell.firstChild.color='red';
//cell.firstChild.onclick=editText();
                       }

    } 
}
function editText(text){
//alert("ok"+ok);
Sanlu(text);
if(ok==0){
if(winFlag==1){
text.style.color="red";
}
if(winFlag==0){
text.style.color="black";
}
if(winFlag==2){
text.style.color="white";
}
}
if(ok==1){
//alert(bFlag);
if(bFlag==1){
text.parentElement.background="images/red.gif";
//sanlu(text);
}
if(bFlag==2){
text.parentElement.bgColor="blue";
}
if(bFlag==0){
text.parentElement.background="images/black.gif";
//sanlu(text);
}
if(bFlag==3){
text.parentElement.bgColor="white";
text.parentElement.background="images/white.gif"
}
}
}

function setOk(){
winFlag==1;
ok=0;
}
function setnOk(){
winFlag==0;
ok=1;
}
function setWin(){
winFlag=1;
}
function setLose(){
winFlag=0;
}
function setWhite(){
winFlag=2;
}
function setBanker(){
bFlag=1;
}
function setPlayer(){
bFlag=0;
}
function setHe(){
bFlag=2;
}
function setDelete(){
bFlag=3;
}
function count(){
var tb1 = document.getElementById('tb1');
var tb2 = document.getElementById('tb2');
var tb3 = document.getElementById('tb3');
var tb4 = document.getElementById('tb4');
//alert(tb1.rows.length);
var wintotal = 0.0;//赢的总数额
var wincount = 0;//赢的总局数
var losetotal = 0.0;//输的总数额
var losecount = 0;//输的总局数
var dongcount = 0;//洞的总个数
var morecount =0 ;//多于2的连庄次数
var zhuangchou=0.0//庄抽水
var lirun = 0.0;//利润
var mayong = 0.0;//码佣
var mayonglv = 0.008;//码佣率
//循环第一次
row =tb1.rows;
for (var i=0;i<cellLeg;i++) { 
for (var j=0;j<rowLeg;j++){
     var temp = row[j].cells[i].firstChild.value;
     if(temp==""){
     if(j==1&&row[0].cells[i].firstChild.value!="")
     {
      dongcount = yunsuan(dongcount,"+",1)
      }
     else{
      if(j==1&&i==0&&row[0].cells[i].firstChild.value==""){
      dongcount = yunsuan(dongcount,"+",1)
      }
      }
       continue;
     }
else{
    if(row[j].cells[i].firstChild.style.color=="red"){
       wintotal = yunsuan(temp,"+",wintotal);
       wincount = yunsuan(1,"+",wincount);
         if(row[j].cells[i].firstChild.parentElement.background=="images/red.gif"){
            var tempC=yunsuan(temp,"*",0.05);
            zhuangchou=yunsuan(zhuangchou,"+",tempC);
                   }
       }
     else if(row[j].cells[i].firstChild.style.color=="black"){
       losetotal = yunsuan(losetotal,"+",temp);
       losecount = yunsuan(1,"+",losecount);
       }
       else{
       if(temp!=0){
       alert("上表第"+(i+1)+"行第"+(j+1)+"列数据错误！请重新统计！");
       break;
       }
        }
     }
    if(j>1){
    morecount = yunsuan(morecount,"+",1);
   }
}
}
//循环第二次
row =tb2.rows;
for (var i=0;i<cellLeg;i++) { 
for (var j=0;j<rowLeg;j++){
var temp = row[j].cells[i].firstChild.value;
if(temp==""){
if(j==1&&row[0].cells[i].firstChild.value!=""){
dongcount = yunsuan(dongcount,"+",1)}

continue;
}
else{
if(row[j].cells[i].firstChild.style.color=="red"){
wintotal = yunsuan(temp,"+",wintotal);
wincount = yunsuan(1,"+",wincount);
if(row[j].cells[i].firstChild.parentElement.background=="images/red.gif"){
var tempC=yunsuan(temp,"*",0.05);
zhuangchou=yunsuan(zhuangchou,"+",tempC);
//alert(zhuangchou);
}
}
else if(row[j].cells[i].firstChild.style.color=="black"){
losetotal = yunsuan(losetotal,"+",temp);
losecount = yunsuan(1,"+",losecount);
}
else
{
if(temp!=0){
alert("下表第"+(i+1)+"行第"+(j+1)+"列数据错误！请重新统计！");
break;
}
}
}
if(j>1){
morecount = yunsuan(morecount,"+",1);
}
}
}
//计算下面表的金额
var wintotal2 = 0.0;//赢的总数额
var wincount2 = 0;//赢的总局数
var losetotal2 = 0.0;//输的总数额
var losecount2 = 0;//输的总局数
var dongcount2 = 0;//洞的总个数
var morecount2 =0 ;//多于2的连庄次数
var zhuangchou2=0.0//庄抽水
var lirun2=0.0;//利润
var mayong2 = 0.0;//码佣
//循环第三次
row =tb3.rows;
for (var i=0;i<cellLeg;i++) { 
for (var j=0;j<rowLeg;j++){
var temp = row[j].cells[i].firstChild.value;
if(temp==""){
if(j==1&&row[0].cells[i].firstChild.value!="")
{
dongcount2 = yunsuan(dongcount2,"+",1)
}
else{
if(j==1&&i==0&&row[0].cells[i].firstChild.value==""){
dongcount2 = yunsuan(dongcount2,"+",1)
}
}
continue;
}
else{
if(row[j].cells[i].firstChild.style.color=="red"){
wintotal2 = yunsuan(temp,"+",wintotal2);
wincount2 = yunsuan(1,"+",wincount2);
if(row[j].cells[i].firstChild.parentElement.background=="images/red.gif"){
var tempC=yunsuan(temp,"*",0.05);
zhuangchou2=yunsuan(zhuangchou2,"+",tempC);
}
}
if(row[j].cells[i].firstChild.style.color=="black"){
losetotal2 = yunsuan(losetotal2,"+",temp);
losecount2 = yunsuan(1,"+",losecount2);
}
}
if(j>1){
morecount2 = yunsuan(morecount2,"+",1);
}
}
}
//循环第四次
row =tb4.rows;
for (var i=0;i<cellLeg;i++) { 
for (var j=0;j<rowLeg;j++){
var temp = row[j].cells[i].firstChild.value;
if(temp==""){
if(j==1&&row[0].cells[i].firstChild.value!="")
{
dongcount2 = yunsuan(dongcount2,"+",1)
}
continue;
}
else{
if(row[j].cells[i].firstChild.style.color=="red"){
wintotal2 = yunsuan(temp,"+",wintotal2);
wincount2 = yunsuan(1,"+",wincount2);
if(row[j].cells[i].firstChild.parentElement.background=="images/red.gif"){
var tempC=yunsuan(temp,"*",0.05);
zhuangchou2=yunsuan(zhuangchou2,"+",tempC);
}
}
if(row[j].cells[i].firstChild.style.color=="black"){
losetotal2 = yunsuan(losetotal2,"+",temp);
losecount2 = yunsuan(1,"+",losecount2);
}
}
if(j>1){
morecount2 = yunsuan(morecount2,"+",1);
}
}
}
//计算上表
dongcount=yunsuan(dongcount,"-",1);
var liantiaochaT=yunsuan(morecount,"-",dongcount);
document.getElementById('dong').value=dongcount;
document.getElementById('more').value=morecount;
document.getElementById('liantiaocha').value=liantiaochaT;
//alert(liantiaochaT +" "+liantiaochaT.toString().indexOf("-"));
if(liantiaochaT.toString().indexOf("-")!=0){
document.getElementById('liantiaocha').style.color="red";
document.getElementById('liantiaochaT').style.color="red";
}
else{
document.getElementById('liantiaocha').style.color="black";
document.getElementById('liantiaochaT').style.color="black";
}
document.getElementById('liantiaochaT').value=liantiaochaT;
document.getElementById('sanliantiao').value=checkliantiao();
document.getElementById('sanliantiaoT').value=checkliantiao();
var shuyingkouT=yunsuan(wincount,"-",losecount);
document.getElementById('loseP').value=losecount;
document.getElementById('winP').value=wincount;
document.getElementById('shuyingkouHT').value=losecount;
document.getElementById('shuyingkouRT').value=wincount;
document.getElementById('shuyingkou').value=shuyingkouT;
//alert(shuyingkouT +" "+shuyingkouT.toString().indexOf("-"));
if(shuyingkouT.toString().indexOf("-")!=0){
document.getElementById('shuyingkou').style.color="red";
document.getElementById('shuyingkouT').style.color="red";
}
else{
document.getElementById('shuyingkou').style.color="black";
document.getElementById('shuyingkouT').style.color="black";
}
document.getElementById('shuyingkouT').value=shuyingkouT;
var shuyingqianT=yunsuan(wintotal,"-",losetotal);
shuyingqianT=FormatAfterDotNumber(shuyingqianT,2);
wintotal=FormatAfterDotNumber(wintotal,2);
losetotal=FormatAfterDotNumber(losetotal,2);
document.getElementById('shuqian').value=losetotal+"万";
document.getElementById('yingqian').value=wintotal+"万";
document.getElementById('shuqianT').value=losetotal+"万";
document.getElementById('yingqianT').value=wintotal+"万";
document.getElementById('shuyingqian').value=shuyingqianT+"万";
if(shuyingqianT.toString().indexOf("-")!=0){
document.getElementById('shuyingqian').style.color="red";
document.getElementById('shuyingqianT').style.color="red";
}
else{
document.getElementById('shuyingqian').style.color="black";
document.getElementById('shuyingqianT').style.color="black";
}
document.getElementById('shuyingqianT').value=shuyingqianT+"万";
//计算码佣
var cha =yunsuan(wintotal,"-",losetotal);
if(cha.toString().indexOf("-")==0){
//wintotal小于losetoal
mayong = yunsuan(wintotal,"*",mayonglv);
//mayong = yunsuan(mayong,"/",1000);
}
else{
//losetoal小于wintotal
mayong = yunsuan(losetotal,"*",mayonglv);
//mayong = yunsuan(mayong,"/",1000);
}
mayong=FormatAfterDotNumber(mayong,2);
document.getElementById('mayong').value=mayong+"万";
document.getElementById('mayongT').value=mayong+"万";
zhuangchou=FormatAfterDotNumber(zhuangchou,2);
document.getElementById('zhuangchou').value=zhuangchou+"万";
document.getElementById('zhuangchouT').value=zhuangchou+"万";
lirun = yunsuan(shuyingqianT,"-",zhuangchou);
lirun=FormatAfterDotNumber(lirun,2);
document.getElementById('lirun').value=lirun+"万";
document.getElementById('lirunT').value=lirun+"万";
if(lirun.toString().indexOf("-")!=0){
document.getElementById('lirunT').style.color="red";
document.getElementById('lirun').style.color="red";
}
else{
document.getElementById('lirunT').style.color="black";
document.getElementById('lirun').style.color="black";
}
var zonglirun = yunsuan(lirun,"+",mayong);
zonglirun=FormatAfterDotNumber(zonglirun,2);
document.getElementById('zonglirun').value=zonglirun+"万";
document.getElementById('zonglirunT').value=zonglirun+"万";
if(zonglirun.toString().indexOf("-")!=0){
document.getElementById('zonglirun').style.color="red";
document.getElementById('zonglirunT').style.color="red";
}
else{
document.getElementById('zonglirunT').style.color="black";
document.getElementById('zonglirun').style.color="black";
}
//计算下表
dongcount2=yunsuan(dongcount2,"-",1);
var liantiaochaT2=yunsuan(morecount2,"-",dongcount2);
document.getElementById('dong2').value=dongcount2;
document.getElementById('more2').value=morecount2;
document.getElementById('liantiaocha2').value=liantiaochaT2;

if(liantiaochaT2.toString().indexOf("-")!=0){
document.getElementById('liantiaocha2').style.color="red";
document.getElementById('liantiaochaT2').style.color="red";
}
else{
document.getElementById('liantiaocha2').style.color="black";
document.getElementById('liantiaochaT2').style.color="black";
}
document.getElementById('liantiaochaT2').value=liantiaochaT2;
document.getElementById('sanliantiao2').value=checkliantiao2();
document.getElementById('sanliantiaoT2').value=checkliantiao2();
var shuyingkouT2=yunsuan(wincount2,"-",losecount2);
document.getElementById('loseP2').value=losecount2;
document.getElementById('winP2').value=wincount2;
document.getElementById('shuyingkouHT2').value=losecount2;
document.getElementById('shuyingkouRT2').value=wincount2;
document.getElementById('shuyingkou2').value=shuyingkouT2;
if(shuyingkouT2.toString().indexOf("-")!=0){
document.getElementById('shuyingkou2').style.color="red";
document.getElementById('shuyingkouT2').style.color="red";
}
else{
document.getElementById('shuyingkou2').style.color="black";
document.getElementById('shuyingkouT2').style.color="black";
}
document.getElementById('shuyingkouT2').value=shuyingkouT2;
var shuyingqianT2=yunsuan(wintotal2,"-",losetotal2);
shuyingqianT2=FormatAfterDotNumber(shuyingqianT2,2);
wintotal2=FormatAfterDotNumber(wintotal2,2);
losetotal2=FormatAfterDotNumber(losetotal2,2);
document.getElementById('shuqian2').value=losetotal2+"万";
document.getElementById('yingqian2').value=wintotal2+"万";
document.getElementById('shuqianT2').value=losetotal2+"万";
document.getElementById('yingqianT2').value=wintotal2+"万";
document.getElementById('shuyingqian2').value=shuyingqianT2+"万";
if(shuyingqianT2.toString().indexOf("-")!=0){
document.getElementById('shuyingqian2').style.color="red";
document.getElementById('shuyingqianT2').style.color="red";
}
else{
document.getElementById('shuyingqian2').style.color="black";
document.getElementById('shuyingqianT2').style.color="black";
}
document.getElementById('shuyingqianT2').value=shuyingqianT2+"万";
//计算码佣
var cha2 =yunsuan(wintotal2,"-",losetotal2);
if(cha2.toString().indexOf("-")==0){
//wintotal小于losetoal
mayong2 = yunsuan(wintotal2,"*",mayonglv);
//mayong2 = yunsuan(mayong2,"/",1000);
}
else{
//losetoal小于wintotal
mayong2 = yunsuan(losetotal2,"*",mayonglv);
//mayong2 = yunsuan(mayong2,"/",1000);
}
mayong2=FormatAfterDotNumber(mayong2,2);
document.getElementById('mayong2').value=mayong2+"万";
document.getElementById('mayongT2').value=mayong2+"万";

zhuangchou2=FormatAfterDotNumber(zhuangchou2,2);
document.getElementById('zhuangchou2').value=zhuangchou2+"万";
document.getElementById('zhuangchouT2').value=zhuangchou2+"万";
lirun2 = yunsuan(shuyingqianT2,"-",zhuangchou2);
lirun2=FormatAfterDotNumber(lirun2,2);
document.getElementById('lirun2').value=lirun2+"万";
document.getElementById('lirunT2').value=lirun2+"万";
if(lirun2.toString().indexOf("-")!=0){
document.getElementById('lirunT2').style.color="red";
document.getElementById('lirun2').style.color="red";
}
else{
document.getElementById('lirunT2').style.color="black";
document.getElementById('lirun2').style.color="black";
}
var zonglirun2 = yunsuan(lirun2,"+",mayong2);
zonglirun2=FormatAfterDotNumber(zonglirun2,2);
document.getElementById('zonglirun2').value=zonglirun2+"万";
document.getElementById('zonglirunT2').value=zonglirun2+"万";
if(zonglirun2.toString().indexOf("-")!=0){
document.getElementById('zonglirun2').style.color="red";
document.getElementById('zonglirunT2').style.color="red";
}
else{
document.getElementById('zonglirunT2').style.color="black";
document.getElementById('zonglirun2').style.color="black";
}
//alert(wintotal);
//alert(losetotal);
//alert("洞个数 "+dongcount);
//alert("连个数 "+morecount);
//alert("连跳差 "+checkliantiao());
mapred = new Map();
mapblack = new Map();
checkQuan("tb1","tb2","tb3","tb4");
}

function checkliantiao(){
   var total = 0;
   var tb1 = document.getElementById('tb1');
   var tb2 = document.getElementById('tb2');
   row =tb1.rows;
   for (var i=0;i<cellLeg-3;i++) {
   var temp = row[1].cells[i].firstChild.value;
   if(temp==""){
     if(row[1].cells[i+1].firstChild.value==""){
       if(row[1].cells[i+2].firstChild.value==""){
        if(row[1].cells[i+3].firstChild.value!=""){
          if(i==0){
             total =yunsuan(total,"+",1);
             }
          else{
             if(row[1].cells[i-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
                }
               }
           } 
          }
         }     
       } 
     }
     var row1 =tb1.rows;
     row =tb2.rows;
     if(row1[1].cells[cellLeg-3].firstChild.value==""&&row1[1].cells[cellLeg-2].firstChild.value==""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row1[1].cells[cellLeg-4].firstChild.value!=""&&row[1].cells[0].firstChild.value!="")
   { total =yunsuan(total,"+",1);}
   for (var i=0;i<cellLeg-3;i++) {
   var temp = row[1].cells[i].firstChild.value;
   if(temp==""){
   
   
   if(i==0&&row1[1].cells[cellLeg-3].firstChild.value!=""&&row1[1].cells[cellLeg-2].firstChild.value==""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row[1].cells[1].firstChild.value!=""){
     total =yunsuan(total,"+",1);
     continue;
     }
     if(i==1&&row1[1].cells[cellLeg-2].firstChild.value!=""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row[1].cells[0].firstChild.value==""&&row[1].cells[2].firstChild.value!=""){
     //alert(row1[1].cells[cellLeg-2].firstChild.value);
     total =yunsuan(total,"+",1);
     continue;
     }
     if(i==2&&row[1].cells[cellLeg-1].firstChild.value!=""&&row[1].cells[1].firstChild.value==""&&row[1].cells[0].firstChild.value==""&&row[1].cells[3].firstChild.value!=""){
     total =yunsuan(total,"+",1);
     continue;
     }
   
     if(row[1].cells[i+1].firstChild.value==""){
       if(row[1].cells[i+2].firstChild.value==""){
        if(row[1].cells[i+3].firstChild.value!=""){
          if(i==0&&row1[1].cells[cellLeg-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
             }
          else{
             if(i!=0&&row[1].cells[i-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
                }
               }
           } 
          }
         }     
       } 
     }
   return total;
   }
   //下表的连跳查询
   function checkliantiao2(){
   var total = 0;
   var tb1 = document.getElementById('tb3');
   var tb2 = document.getElementById('tb4');
   row =tb1.rows;
   for (var i=0;i<cellLeg-3;i++) {
   var temp = row[1].cells[i].firstChild.value;
   if(temp==""){
     if(row[1].cells[i+1].firstChild.value==""){
       if(row[1].cells[i+2].firstChild.value==""){
        if(row[1].cells[i+3].firstChild.value!=""){
          if(i==0){
             total =yunsuan(total,"+",1);
             }
          else{
             if(row[1].cells[i-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
                }
               }
           } 
          }
         }     
       } 
     }
     var row1 =tb1.rows;
     row =tb2.rows;
     if(row1[1].cells[cellLeg-3].firstChild.value==""&&row1[1].cells[cellLeg-2].firstChild.value==""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row1[1].cells[cellLeg-4].firstChild.value!=""&&row[1].cells[0].firstChild.value!="")
   { total =yunsuan(total,"+",1);}
   for (var i=0;i<cellLeg-3;i++) {
   var temp = row[1].cells[i].firstChild.value;
   if(temp==""){
   
   
   if(i==0&&row1[1].cells[cellLeg-3].firstChild.value!=""&&row1[1].cells[cellLeg-2].firstChild.value==""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row[1].cells[1].firstChild.value!=""){
     total =yunsuan(total,"+",1);
     continue;
     }
     if(i==1&&row1[1].cells[cellLeg-2].firstChild.value!=""&&row1[1].cells[cellLeg-1].firstChild.value==""&&row[1].cells[0].firstChild.value==""&&row[1].cells[2].firstChild.value!=""){
     //alert(row1[1].cells[cellLeg-2].firstChild.value);
     total =yunsuan(total,"+",1);
     continue;
     }
     if(i==2&&row[1].cells[cellLeg-1].firstChild.value!=""&&row[1].cells[1].firstChild.value==""&&row[1].cells[0].firstChild.value==""&&row[1].cells[3].firstChild.value!=""){
     total =yunsuan(total,"+",1);
     continue;
     }
   
     if(row[1].cells[i+1].firstChild.value==""){
       if(row[1].cells[i+2].firstChild.value==""){
        if(row[1].cells[i+3].firstChild.value!=""){
          if(i==0&&row1[1].cells[cellLeg-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
             }
          else{
             if(i!=0&&row[1].cells[i-1].firstChild.value!=""){
             total =yunsuan(total,"+",1);
                }
               }
           } 
          }
         }     
       } 
     }
   return total;
   }

function checkQuan(tb1Name,tb2Name,tb3Name,tb4Name){
var tb1 = document.getElementById(tb1Name);
var tb2 = document.getElementById(tb2Name);
var tb3 = document.getElementById(tb3Name);
var tb4 = document.getElementById(tb4Name);
var tblArr = new Array();
tblArr[0]=tb1;
tblArr[1]=tb2;
tblArr[2]=tb3;
tblArr[3]=tb4;

for(var k=0;k<4;k++){
//alert(tblArr[k]);
row =tblArr[k].rows;
var tempColor="";
var tempT=0;
for (var i=0;i<cellLeg;i++) { 
tempColor="";
tempT=0;
for (var j=0;j<rowLeg;j++){
//alert(row[j].cells[i].firstChild.parentElement.bgColor);
if(row[j].cells[i].firstChild.parentElement.bgColor==""){
break;
}
else if(row[j].cells[i].firstChild.parentElement.bgColor=="#000000"){
if(tempColor!=""&&tempColor!="#000000"){
alert("画圈颜色错误！请检查");
break;
}
tempColor="#000000";
tempT=yunsuan(tempT,"+",1);
}
else if(row[j].cells[i].firstChild.parentElement.bgColor=="#ff0000"){
if(tempColor!=""&&tempColor!="#ff0000"){
alert("画圈颜色错误！请检查");
break;
}
//alert("red");
tempColor="#ff0000";
tempT=yunsuan(tempT,"+",1);
}
if(j+1==rowLeg&&row[j].cells[i].firstChild.parentElement.bgColor!=""){
//alert("有连号");
for (var p=i+1;p<cellLeg;p++){
if(row[j].cells[p].firstChild.parentElement.bgColor==tempColor){
tempT=yunsuan(tempT,"+",1);
}
else{
break;
}
}
}
  }
if(tempColor=="#ff0000"){
var total = mapred.get(tempT);
//alert(total);
if(total==null){
mapred.put(tempT,1);
}
else{
total=yunsuan(total,"+",1);
mapred.put(tempT,total);
}
}

if(tempColor=="#000000"){
var total = mapblack.get(tempT);
if(total==null){
mapblack.put(tempT,1);
}
else{
total=yunsuan(total,"+",1);
mapblack.put(tempT,total);
}
}
}
}

var redArr = new Array();
redArr=mapred.getKeys();
redArr.sort();//
var redRes="";
for(var i=0;i<mapred.size();i++){
redRes =redRes+redArr[i]+","+mapred.get(redArr[i])+";";
}
var blackArr = new Array();
blackArr=mapblack.getKeys();
blackArr.sort();//
var blackRes="";
for(var i=0;i<mapblack.size();i++){
blackRes =blackRes+blackArr[i]+","+mapblack.get(blackArr[i])+";";
}
var res = redRes+"#"+blackRes;
document.getElementById('quanT').value=res;
//alert(redRes);
//alert(blackRes);
//alert(document.getElementById('quanT').value);
}
function Save(){    
    
    //window.document.write(document.documentElement.outerHTML);
	//window.document.write(document.documentElement.innerHTML);     
    //window.document.execCommand("SaveAs",false,"f:\\统计.html");
	var strHTML =document.documentElement.outerHTML;
	var   winSave   =   window.open(); 
	winSave.document.open("text/html","utf-8");   
    winSave.document.write(strHTML);   
    winSave.document.execCommand("SaveAs",true,"f:\\统计.html");   
    winSave.close();   
}

