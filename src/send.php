<?php

if ($_POST) {
    if (isset($_POST['email'])) {
        $email = $_POST['email'];
        $email = htmlspecialchars($email);
        $email = urldecode($email);
        $email = trim($email);

        $message = "Почта: " . $email;
    } else if (isset($_POST['name']) && isset($_POST['tel'])) {
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $text = $_POST['text'];

        $name = htmlspecialchars($name);
        $tel = htmlspecialchars($tel);
        $text = htmlspecialchars($text);

        $name = urldecode($name);
        $tel = urldecode($tel);
        $text = urldecode($text);

        $name = trim($name);
        $tel = trim($tel);
        $text = trim($text);

        $message = "Имя: " . $name . "<br>Номер: " . $tel . "<br>Информация: " . $text;
    }
    mail("mail@mir-outsource.ru", "Заявка с сайта", $message, "Content-Type: text/html; charset=UTF-8");
}


header("Location: index.html");
