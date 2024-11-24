import React from "react"; // Імпортується React для створення компонента
import { useParams } from "react-router-dom"; // Імпорт хука для отримання параметрів з URL
import { Post } from "../components/Post"; // Компонент для відображення посту
import { Index } from "../components/AddComment"; // Компонент для додавання коментаря
import { CommentsBlock } from "../components/CommentsBlock"; // Компонент для відображення коментарів
import axios from "../axios"; // Імпорт axios для запитів до API

export const FullPost = () => {
  // Стан для зберігання отриманих даних і індикації завантаження
  const [data, setData] = React.useState({});
  const [isLoading, setLoading] = React.useState(true);

  // Отримання параметру ID з URL
  const { id } = useParams();

  // Використання useEffect для виконання запиту після рендеру компонента
  React.useEffect(() => {
    axios
      .get(`/posts/${id}`) // Запит до API для отримання даних посту за ID
      .then((res) => {
        setData(res.data); // Оновлення стану з отриманими даними
        setLoading(false); // Зміна стану на завершене завантаження
      })
      .catch((err) => {
        console.warn(err); // Логування помилки
        alert("Помилка отримання статті "); // Виведення попередження про помилку
      });
  }, [id]); // Ефект виконується при зміні параметра ID

  // Якщо дані ще завантажуються, повертається скелетон (анімований шаблон)
  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      {/* Відображення повного посту після завантаження даних */}
      <Post
        id={data._id} // ID посту
        title={data.title} // Заголовок посту
        imageUrl={data.imageUrl} // URL зображення
        user={data.user} // Інформація про користувача
        createdAt={data.createdAt} // Дата створення посту
        viewsCount={data.viewsCount} // Кількість переглядів
        commentsCount={3} // Фіксована кількість коментарів (можливо, має бути динамічною)
        tags={data.tags} // Теги посту
        isFullPost // Позначення, що це повний пост
      >
        <p>{data.text}</p> {/* Відображення тексту посту */}
      </Post>

      {/* Компонент для відображення коментарів */}
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин", // Тестове ім'я користувача
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg", // URL аватара
            },
            text: "Це текстовий коментар 555555", // Текст коментаря
          },
          {
            user: {
              fullName: "Іван Іванов", // Тестове ім'я користувача
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg", // URL аватара
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top", // Текст коментаря
          },
        ]}
        isLoading={false} // Задано, що коментарі вже завантажені
      >
        <Index /> {/* Компонент для додавання нового коментаря */}
      </CommentsBlock>
    </>
  );
};