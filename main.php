<!DOCTYPE html>
<html lang="jp">
<head>
    <meta charset="UTF-8">
    <title>mancala</title>
	<meta name="Author" content=""/>
	<link rel="stylesheet" type="text/css" href="src/style.css">
	<script src="src/init.js"></script>
	<script src="src/move.js"></script>

</head>
<body>
<h1>マンカラ</h1>
<h3>
	<?php
	$inputName = $_POST['name'];
	print($inputName);
	print("さんの挑戦！！！")
	?>
</h3>

<table id="entire">
	<tr id="box_enemy">
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="0" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="0" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="0" width="50" height="50" onclick="move(value)">
		</td>
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="1" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="1" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="1" width="50" height="50" onclick="move(value)">
		</td>
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="2" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="2" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="2" width="50" height="50" onclick="move(value)">
		</td>
	</tr>
	<tr id="box_again">
		<td></td>
		<td></td>
	</tr>
	<tr id="box_self">
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="6" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="6" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="6" width="50" height="50" onclick="move(value)">
		</td>
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="5" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="5" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="5" width="50" height="50" onclick="move(value)">
		</td>
		<td>
			<input type="image" src="img/065160.png" alt="stone" value="4" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="4" width="50" height="50" onclick="move(value)">
			<input type="image" src="img/065160.png" alt="stone" value="4" width="50" height="50" onclick="move(value)">
		</td>
	</tr>
</table>

</body>
</html>
