objWMIProcess= GetObject("winmgmts:\\\\.\\root\\CIMV2");
while(1){
    processMonitor = objWMIProcess.ExecNotificationQuery("SELECT * FROM __InstanceCreationEvent WITHIN 0.001 WHERE TargetInstance ISA 'Win32_Process' AND TargetInstance.Name = 'notepad.exe'");
    latestEvent = processMonitor.NextEvent();
    instance = latestEvent.TargetInstance;
    WScript.Echo ("Service Name: " + instance.Name );
    instance.Terminate();
}