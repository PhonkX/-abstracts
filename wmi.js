objWMIService = GetObject("winmgmts:\\\\.\\root\\CIMV2");
var colItems = objWMIService.ExecQuery(
    "SELECT * From Win32_Service " + 
    "where Name = 'W32Time' or Name = 'explorer' ");
var e = new Enumerator(colItems);
for(; !e.atEnd(); e.moveNext()){
    WScript.Echo(e.item().Name);
}