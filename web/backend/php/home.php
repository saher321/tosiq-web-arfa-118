<?php
$a = $_GET['a'];
$b = $_GET['b'];
if ($b == 0) {
    $result = $a+$b;
} else {
    $result = $a/$b;
}
echo "Sum of two numbers is: <br/>".$result;
?>