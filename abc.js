var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.Run("notepad.exe");
WshShell.AppActivate("Блокнот");
WScript.Sleep(400);
WshShell.SendKeys("Hello, world");