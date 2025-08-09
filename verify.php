<?php
$correct_password = "secure123"; // Change this to your desired password

if ($_POST['password'] === $correct_password) {
  header("Location: quiz.html");
  exit();
} else {
  echo "<h3>Incorrect password. Please try again.</h3>";
  echo "<a href='index.html'>Go back</a>";
}
?>
