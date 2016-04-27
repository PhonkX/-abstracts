objWMIService = GetObject("winmgmts:\\\\.\\root\\CIMV2");
serviceMonitor = objWMIService.ExecNotificationQuery("SELECT * FROM __InstanceModificationEvent WITHIN 1 WHERE TargetInstance ISA 'Win32_Service'");
WScript.Echo ("Waiting for service to start-stop ...");
while(1) {
    latestEvent = serviceMonitor.NextEvent();
    instance = latestEvent.TargetInstance;
    WScript.Echo ("Service Name: " + instance.Name );
}