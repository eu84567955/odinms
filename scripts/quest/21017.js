load('nashorn:mozilla_compat.js');
var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 5) {
	    qm.sendNextS("#b(You declined out of fear, but it''s not like you can run away like this. Take a big breath, calm down, and try again.)#k", 2);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("It seems like you''re warmed up now. This is when rigorous training can really help you build a strong foundation. Let''s proceed with the Basic Training, shall we?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("Go defeat some #r#o0100133#s#k in #b#m140020200##k this time. I think about  #r20#k should do it. Go on ahead and... Hm? Do you have something you''d like to say?", 8);
    } else if (status == 2) {
	qm.sendNextPrevS("Isn''t the number getting bigger and bigger?", 2);
    } else if (status == 3) {
	qm.sendNextPrevS("Of course it is. What, are you not happy with 20? Would you like to defeat 100 of them instead? Oh, how about 999 of them? Someone in Sleepywood would be able to do it easily. After all, we are training...", 8);
    } else if (status == 4) {
	qm.sendNextPrevS("Oh no, no, no. Twenty is plenty", 2);
    } else if (status == 5) {
	qm.askAcceptDecline("You don't have to be so modest. I understand your desire to quickly become the hero you once were. This sort of attitude is what makes you a hero.");
    } else if (status == 6) {
	qm.forceStartQuest();
	qm.sendNextS('#b(You accepted, thinking you might end up having to 999 of them if you let her keep talking.)#k', 2);
    } else if (status == 7) {
	qm.sendNextPrevS('Please go ahead and slay 20 #o0100133#s.', 8);
    } else if (status == 8) {
	qm.AranTutInstructionalBubble("Effect/OnUserEff.img/guideEffect/aranTutorial/tutorialArrow3");
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
