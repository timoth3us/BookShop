<?php

const DB_HOST = "localhost";
const USER = "G12";
const PW =  "ru39comp";
const DB_NAME = "g12";

$link = new mysqli(DB_HOST, USER, PW, DB_NAME)
or die("Keine Verbindung möglich: ");

    $query = "SELECT ProduktID AS id , Produkttitel AS title, Autorname AS author, PreisNetto AS price, Menge AS quantity, Lagerbestand AS stock FROM buecher1";
    $result = $link->query($query);
    $data = [];
    
    /* pealing the array data from db object */        
    while ($row = $result->fetch_all(MYSQLI_ASSOC)) {
        $data['products'] = $row;
    }

    $json = json_encode($data, JSON_PRETTY_PRINT);
    $bytes = file_put_contents("data.json", $json); 
    echo "The number of bytes written are $bytes.";

$link->close();
?>