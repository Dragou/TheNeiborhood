function windowOneOn(player) {
	actuPlayer = document.getElementById(player);
	if(actuPlayer.muted){
		actuPlayer.muted = false;
	}
	if(actuPlayer.volume == 1){
		actuPlayer.volume = 0.0;
	}

	for (var i = 0; i < 19; i++) {
		actuPlayer.volume += 0.05;
		sleep(100);
	}
	console.log(player + ' : ' + actuPlayer.volume);
}

function windowOneOff(player) {
	actuPlayer = document.getElementById(player);

	for (var i = 0; i < 19; i++) {
		actuPlayer.volume -= 0.05;
		sleep(100);
	}
	console.log(player + ' : ' + actuPlayer.volume);
}

function windowTwoOn(player) {
	actuPlayer = document.getElementById(player);
	if(actuPlayer.muted){
		actuPlayer.muted = false;
	}
	if(actuPlayer.volume == 1){
		actuPlayer.volume = 0.0;
	}

	for (var i = 0; i < 19; i++) {
		actuPlayer.volume += 0.05;
		sleep(100);
	}
	console.log(player + ' : ' + actuPlayer.volume);
}

function windowTwoOff(player) {
	actuPlayer = document.getElementById(player);

	for (var i = 0; i < 19; i++) {
		actuPlayer.volume -= 0.05;
		sleep(100);
	}
	console.log(player + ' : ' + actuPlayer.volume);
}

function sleep(milliseconds) {
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
			break;
		}
	}
}