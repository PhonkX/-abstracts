xmlRequest = new ActiveXObject("Microsoft.XMLHTTP"); 
xmlRequest.open("GET", "http://news.yandex.ru/index.rss");
xmlRequest.send(null);
var xmlDocument = WScript.CreateObject("Msxml2.DOMDocument.3.0");
while (xmlRequest.readyState != 4) { 
	WScript.Sleep(100); 
}

if (xmlRequest.status == 200) {
	if(xmlDocument.loadXML(xmlRequest.responseText) != 0)
	{
		var firstNewsDescription = xmlDocument.getElementsByTagName("rss/channel/item/description")[0].childNodes[0].nodeValue;
		var firstNewsTitle = xmlDocument.getElementsByTagName("rss/channel/item/title")[0].childNodes[0].nodeValue;
		WScript.Echo(firstNewsTitle);
		WScript.Echo(firstNewsDescription);
	}
	else	WScript.Echo("No file found");
	

}