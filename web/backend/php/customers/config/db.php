<?php
    $connection = mysqli_connect(
        "localhost",
        "root",
        "",
        "php_118"
    );

    if (!$connection) {
        die("Failed to connect database");
    }
?>