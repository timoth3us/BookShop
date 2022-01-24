<?php

const DB_HOST = "localhost";
const USER = "G12";
const PW =  "ru39comp";
const DB_NAME = "g12";

$link = new mysqli(DB_HOST, USER, PW, DB_NAME)
or die("Keine Verbindung möglich: ");

    $query = "SELECT ProduktID, Produkttitel, Autorname FROM buecher1";
    $result = $link->query($query);
    
    /* pealing the array data from db object */        
    while ($row = $result->fetch_all(MYSQLI_ASSOC)) {
        $data[] = $row;
    }

    /*    checking if data has no rows */
    if(isset($data)){
        /*    convert data to json */
        $json = json_encode($data);
    }else{
        /*    set nothing to return */
        $json = null;
    }

    $json = json_encode($data);
    $bytes = file_put_contents("myfile.json", $json); 
    echo "The number of bytes written are $bytes.";

$link->close();
?>