var WshShell = WScript.CreateObject("WScript.Shell");
//WshShell.Run("notepad.exe");

while(true){
	WshShell.AppActivate("�������");
	WScript.Sleep(400);
	WshShell.SendKeys("%+{F4}");
}