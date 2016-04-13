var fso = new ActiveXObject("Scripting.FileSystemObject");
var file = fso.OpenTextFile("hello.txt");
var lines = file.ReadAll().split("\r\n");
for (var i = 0; i < lines.length; ++i)
	WScript.Echo(i + " " + lines[i]);