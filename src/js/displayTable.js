function displayTable(){
	var entireHtml = '<table id=\"entire\">'
		+ '<tr id="box_enemy">'
		+ `${generateRow(3,[0,1,2])}`
		+ '</tr>'
		+ '<tr id="box_again">'
		+ `${generateRow(2,[7,3])}`
		+ '</tr>'
		+ '<tr id="box_self">'
		+ `${generateRow(3,[6,5,4])}`
		+ '</tr>'
		+ '</table>';
	return entireHtml;
}

function generateRow(num,indexes){
	var generatedRow="";
	for(i=0;i<num;i++){
		generatedRow += '<td>';
		for(j=0;j<stoneAddress[indexes[i]];j++){
			console.log("stoneAddress[indexes]"+stoneAddress[indexes[i]]);
			console.log("indexesの数"+ indexes[i]);
			let val = String(indexes[i]);
			generatedRow += `<input type=image src=img/GreenStone.png alt=stone value=${val} width=50 height=50 onclick=move(value)>`;
		}
		generatedRow += '</td>';
	}
	console.log("generatedRowの表示"+generatedRow);
	return generatedRow;
}

