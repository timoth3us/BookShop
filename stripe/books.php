<?php
include '../catalog.php';

//fetch.send
//json to array
$books = [
    [
        'name' => 'PHP For Beginners', //
        'description' => 'Learn PHP from the ground up.',
        'images' => [getenv('BASE_URL') . 'images/php.jpg'],
        'amount' => 4999, //
        'currency' => 'eur', //statisch
        'quantity' => 1, //
    ],
    [
        'name' => 'JavaScript For Beginners',
        'description' => 'Learn PHP from the ground up.',
        'images' => [getenv('BASE_URL') . 'images/js.jpg'],
        'amount' => 3999,
        'currency' => 'eur',
        'quantity' => 5,
    ]
]; 
?>
