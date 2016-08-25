load('nashorn:mozilla_compat.js');
var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 3600;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
    em.getChannelServer().saveAll();
    var Mensagem = "AutoSave completo!"
    em.getChannelServer().yellowWorldMessage("[LeaderMS Save] " + Mensagem);
    var iter = em.getInstances().iterator();
    while (iter.hasNext()) {
        var eim = iter.next();
    }
}