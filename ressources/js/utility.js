function windowOn(player) {
	actuPlayer = document.getElementById(player);
	if(actuPlayer.muted){
		actuPlayer.muted = false;
	}
	if(actuPlayer.volume == 1){
		actuPlayer.volume = 0.0;
	}

	for (var i = 0; i < 10; i++) {
		actuPlayer.volume += 0.1;
		sleep(10);
	}
	//console.log(player + ' : ' + actuPlayer.volume);
}

function windowOff(player) {
	actuPlayer = document.getElementById(player);

	for (var i = 0; i < 10; i++) {
		actuPlayer.volume -= 0.1;
		sleep(10);
	}
	//console.log(player + ' : ' + actuPlayer.volume);
}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}