load('nashorn:mozilla_compat.js');
var status = -1;

function start(mode, type, selection) {
    qm.dispose();
}

function end(mode, type, selection) {
    qm.forceStartQuest("0");
    qm.dispose();
}