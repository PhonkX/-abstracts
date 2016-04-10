var WshShell = WScript.CreateObject("WScript.Shell");
WshShell.Run("calc.exe");
WshShell.AppActivate("Калькулятор");
WScript.Sleep(2000);
WshShell.SendKeys("10{+}4*2{+}p{=}ls{/}50{=}");
//WshShell.SendKeys("=ls/50=");
WScript.Sleep(1000000);