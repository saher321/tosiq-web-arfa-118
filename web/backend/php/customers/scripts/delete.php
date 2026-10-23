<?php
include "../config/db.php";

$id = (int) $_GET["id"];

if (isset($id) && $id > 0) {
    $query = "delete from customers where id=$id";

    $result = mysqli_query($connection, $query);
    if ($result) {
        header("Location: ../customers.php");
        exit();
    } else {
        die("Error: Failed to delete customer");
    }
}

?>