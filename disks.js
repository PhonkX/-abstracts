objWMIDisk= GetObject("winmgmts:\\\\.\\root\\CIMV2");
while(1){
    diskMonitor = objWMIDisk.ExecNotificationQuery("SELECT * FROM __InstanceCreationEvent WITHIN 0.001 WHERE TargetInstance ISA 'Win32_LogicalDisk'");
    latestEvent = diskMonitor.NextEvent();
    instance = latestEvent.TargetInstance;
    WScript.Echo ("Disk mount letter: " + instance.DeviceID);
}