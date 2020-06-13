<?php

   //WARNING: IN ORDER TO EXECUTE PHP FILES GO TO THE DESIGNED FOLDER BY YOUR SERVER
   // TO DO SO. USUALLY. C:/XAMPP/HTDOCS/
   // execute php files outside C:/XAMPP/HTDOCS/ and located in 
   //  http://localhost:8383/Helico/php/sendscore.php
   //  using the browser url:  
   //  http://localhost/PHPexec.php?f=C:\Roma\Nebeans_repsol\Helico\public_html\php\sendscore.php
   
include("connect.php");//contains all passwords.
include("iploc.php");//gets IP from users.

    // Create connection
    $conn = new mysqli($servername, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
     
//for inserting a row into the database:
    
$user = filter_input(INPUT_GET, 'user');
$email =  filter_input(INPUT_GET, 'email');
$comment =  filter_input(INPUT_GET, 'comentaris');
$distance =  filter_input(INPUT_GET, 'distance');
$clerks =  filter_input(INPUT_GET, 'clerks');

//echo nl2br("Welcome " . $user. "! with email: ". $email. ". Distance run: ".$distance.". Clerks rescued: ".$clerks.". You commented that: <br> ".$comment. "<br>");


$sql = sprintf("INSERT INTO neygame_users (user, email, comment, distance, clerks, IP)
VALUES ('%s','%s', '%s', '%s', '%s', '%s')", 
addslashes($user),
addslashes($email),
addslashes($comment),
addslashes($distance),
addslashes($clerks),
addslashes($ip_address));


if ($conn->query($sql) === FALSE) {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
 
 //get scores from da people
 $sql = "SELECT user, distance, clerks FROM neygame_users";
    $result = $conn->query($sql);

	$result2 =  $result -> fetch_all(MYSQLI_ASSOC);

	
	
	
	$names = array_column($result2, 'user');
	$scores = array_column($result2, 'distance');
	$rescats = array_column($result2, 'clerks');

	
	array_multisort($rescats, SORT_DESC, $scores, SORT_DESC, $names );
	

	$max = 12;
	$rank = "<table id='userscrs'>   <tr> <th>Pos.</th> <th>Name</th>  <th>Distance (km) </th> <th> Neys rescued </th> </tr>";
	for($i = 0;  ($i < count($scores)) and ($i<$max) ; $i++) {
		if($i<3) {
			$rank = $rank . "<tr> <td ><b style='color:brown'>" .($i +1)."</b></td><td ><b style='color:brown'>" . $names[$i]. "</b></td> <td style='text-align: right;' ><b style='color:brown'>". 
			 $scores[$i].	"</b></td> <td style='text-align: center;' ><b style='color:brown'>". $rescats[$i].		"</b></td></tr> ";
		} elseif ($i<7) {
		$rank = $rank . "<tr style='color:DarkCyan'> <td >" .($i +1)."</td><td >" . $names[$i]. "</td> <td style='text-align: right;' >". 
			 $scores[$i].	"</td> <td style='text-align: center;' >". $rescats[$i].		"</td></tr>";
		}  else {
		    	$rank = $rank . "<tr style='color:gray'> <td >" .($i +1)."</td><td >" . $names[$i]. "</td> <td style='text-align: right;' >". 
			 $scores[$i].	"</td> <td style='text-align: center;' >". $rescats[$i].		"</td></tr>";
		}
	}
	$rank = $rank . "</table>";
	//echo $rank;




	
	
	// Free result set
	$result -> free_result();
	
$conn->close();
 


 
 header("Location: thanksfor.php?rank=$rank"); ?>