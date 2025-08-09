<?php

$correct_password = "child-friendly";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $submitted_password = $_POST['password'];
    if ($submitted_password === $correct_password) {
        exit();
    } else {
        echo "<script>alert('Incorrect password. Please try again.'); window.location.href='index.html';</script>";
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}
?>
