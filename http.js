xmlRequest = new ActiveXObject("Microsoft.XMLHTTP"); 
xmlRequest.open("GET", "http://news.yandex.ru/index.rss");
xmlRequest.send(null);

while (xmlRequest.readyState != 4) { 
	WScript.Sleep(100); 
}

if (xmlRequest.status == 200) {
	WScript.Echo(xmlRequest.responseText);
	var page = xmlRequest.responseText;
	var firstItemTag = page.indexOf("<item>");
	var secondItemTag = page.indexOf("</item>");
	var text = page.substring(first, second);
	WScript.Echo(text);
}

