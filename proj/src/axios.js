// Імпортуємо axios, щоб створити інстанс для HTTP-запитів
import axios from "axios";

// Створюємо інстанс axios з базовою URL-адресою
const instance = axios.create({
    // Вказуємо базову URL-адресу для всіх запитів
    baseURL: 'http://localhost:4444', // Це сервер, до якого будуть здійснюватися запити
});

// Експортуємо інстанс для використання в інших частинах додатку
export default instance;