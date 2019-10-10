function move(ele) {
	var stone_address = new Array(8);
	
	for(i=0;i<8;i++){
		if(i!=3 && i!=7){
			stone_address[i] = 3;
		}
	}
	
	console.log(ele);
	console.log(stone_address);	
}