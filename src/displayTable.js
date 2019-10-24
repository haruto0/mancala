function displayTable(){
	var entireHtml = '<tr id="box_enemy">'
	+ generateRow(3,[0,1,2]);
	+ generateRow(2,[7,3]);
	+ generateRow(3,[6,5,4]);
	+ '<tr>';

	return entireHtml;
}

function generateRow(num,indexes){
	var generatedRow;

	for(i=0;i<num;i++){
		<td>
		for(j=0;j<indexes.length;j++){
			console.log("indexes"+j);
		 	<input type="image" src="img/065160.png" alt="stone" $`value={j}` width="50" height="50" onclick="move(value)">
		}
		</td>
	}
	return generatedRow;
}