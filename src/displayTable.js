function displayTable(){
<table id="entire">
	generateRow(3,[0,1,2]);
	generateRow(2,[7,3]);
	generateRow(3,[6,5,4]);
</table>
}

function generateRow(num,indexes){
	<tr id="box_enemy">
		for(i=0;i<num;i++){
			<td>
			for(j=0;j<indexes.length;j++){
				console.log("indexes"+j);
				<input type="image" src="img/065160.png" alt="stone" $`value={j}` width="50" height="50" onclick="move(value)">
			}
			</td>
		}
	</tr>
	
}