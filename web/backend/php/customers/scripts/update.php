<?php
    include "../config/db.php";

    $id  = $_POST["id"];
    $name  = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];

    $query  = "update customers set name='$name', email='$email', phone='$phone' where id=$id";
    $result = mysqli_query($connection, $query);

    if($result) {
        header("Location: ../customers.php");
    } else {
        die("Failed to update record!");
    }

?>