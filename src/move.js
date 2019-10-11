function move(place) {
	console.log(stoneAddress);
	//全体の文章を取得
	var entire = document.getElementById('entire')
	var stoneNum = stoneAddress[place];
	stoneAddress[place]=0;
	//石の場所を移動する。
	for(i=place;i<(place+stoneNum);i++){
		stoneAddress[(i+1)%8] = stoneAddress[(i+1)%8] + 1;
	}
	
	return(stoneAddress);
	
	console.log(entire);
	console.log(place);
	console.log(stoneAddress);
}