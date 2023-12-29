<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получение данных из формы
    $name = $_POST["name"];
    $email = $_POST["mail"];
    $message = $_POST["message"];

    // Email, на который будет отправлено письмо
    $to = "forma@agencypride.ru"; // Замените на свой адрес электронной почты

    // Тема письма
    $subject = "Сообщение от $name";

    // Сообщение
    $email_message = "Имя: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Сообщение:\n$message";

    // Заголовки письма
    $headers = "From: $email";

    // Отправка письма
    mail($to, $subject, $email_message, $headers);

    // Оповещение об успешной отправке
    echo "Спасибо! Ваше сообщение было успешно отправлено.";
} else {
    // Если форма не была отправлена
    echo "Ошибка: доступ к этому скрипту разрешен только методом POST.";
}
?>