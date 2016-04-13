var xmlDocument = WScript.CreateObject("Msxml2.DOMDocument.3.0");
if(xmlDocument.load("files.xml") != 0)
{
	var list = xmlDocument.selectNodes("//*/file[@os='win']/@name");

	var e = new Enumerator(list);
	for(;!e.atEnd(); e.moveNext())
	{
		WScript.Echo(e.item().text);
	}
	
}
else
	WScript.Echo("No file found");