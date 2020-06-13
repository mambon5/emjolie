<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <title>Ranking</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <style>
<?php include '../style/button.css'; ?>
</style>
        
    </head>
    <body style="background-color:LightCyan">
        
        <button onclick="window.location.href='../index.html'">Back to game!</button>
   <h2>Current player ranking for this incredible game:</h2>
	
	    <?php $yolo = $_GET['rank'] ;
	echo $yolo . "<br>";
	?>
	
	</body>

	
</html>