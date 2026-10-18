<?php
    include "../config/db.php";

    $name  = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    $query  = "insert into customers (name, email, phone) values ('$name', '$email', '$phone')";
    $result = mysqli_query($connection, $query);

    if($result) {
        header("Location: ../customers.php");
    } else {
        die("Failed to add record!");
    }

?>