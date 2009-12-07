function exportx() {
  var path,filename;
  path = location.href.substring(8,location.href.lastIndexOf('.')+1)+"txt";
  //alert(path);
  var   fso   =   new   ActiveXObject("Scripting.FileSystemObject");    
  var   f1   =   fso.createtextfile(path,true);     
  f1.WriteLine("Testing   1,   2,   3.");     
  f1.Close();
}