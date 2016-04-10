var WshShell = WScript.CreateObject("WScript.Shell");
//WshShell.Run("notepad.exe");

while(true){
	WshShell.AppActivate("Блокнот");
	WScript.Sleep(400);
	WshShell.SendKeys("%+{F4}");
}