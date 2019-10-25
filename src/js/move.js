function move(place) {
	place = Number(place);
	//全体の文章を取得
	var entire = document.getElementById('entire');
	//stoneNumに配列にある碁石の数を代入。
	var stoneNum = stoneAddress[place];
	//石の場所の配列を0にする。
	stoneAddress[place]=0;
	
	//石の場所を移動する
	for(i=place;i<(place+stoneNum);i++){
		console.log((i+1)%8);
		stoneAddress[(i+1)%8] += 1;
	}	
	console.log(entire);
	document.write(displayTable());
}
