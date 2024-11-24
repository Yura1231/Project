import React from 'react'; // Імпортуємо React для створення компонента
import Tabs from '@mui/material/Tabs'; // Компонент Tabs для навігації між вкладками
import Tab from '@mui/material/Tab'; // Компонент Tab для окремих вкладок
import Grid from '@mui/material/Grid'; // Сітка для організації елементів на сторінці
import axios from '../axios'; // Імпорт axios для здійснення запитів до API
import { useDispatch, useSelector } from 'react-redux'; // Хуки Redux для доступу до стану і диспатчу дій
import { Post } from '../components/Post'; // Компонент для відображення постів
import { TagsBlock } from '../components/TagsBlock'; // Компонент для відображення тагів
import { CommentsBlock } from '../components/CommentsBlock'; // Компонент для відображення коментарів
import { fetchPosts, fetchTags } from '../redux/slices/post'; // Дії для завантаження постів і тагів з Redux

export const Home = () => {
  const dispath = useDispatch(); // Використовуємо dispatch для відправлення дій
  const { posts, tags } = useSelector(state => state.posts); // Отримуємо пости і теги з глобального стану
  const isPostLoading = posts.status === 'load'; // Перевірка, чи пости ще завантажуються
  const isTagsLoading = tags.status === 'load'; // Перевірка, чи теги ще завантажуються

  // Завантажуємо пости і теги при монтуванні компонента
  React.useEffect(() => {
    dispath(fetchPosts()); // Завантажуємо пости
    dispath(fetchTags()); // Завантажуємо теги
  }, [dispath]);

  console.log(posts); // Логування постів для дебагу

  return (
    <>
      {/* Вкладки для навігації між різними типами постів (нові та популярні) */}
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Нове" />
        <Tab label="Популярне " />
      </Tabs>

      {/* Сітка для організації контенту */}
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {/* Відображення постів або скелетонів під час завантаження */}
          {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) =>
            isPostLoading ? (
              <Post key={index} isLoading={true} /> // Показуємо скелетон для завантаження
            ) : (
              <Post
                key={obj._id}
                id={obj._id} // ID посту
                title={obj.title} // Заголовок посту
                imageUrl={obj.imageUrl} // URL зображення
                user={obj.user} // Інформація про користувача
                createdAt={obj.createdAt} // Дата створення посту
                viewsCount={obj.viewsCount} // Кількість переглядів
                commentsCount={3} // Фіксована кількість коментарів
                tags={obj.tags} // Теги посту
                isEditable // Позначення, що пост можна редагувати
              />
            )
          )}
        </Grid>

        {/* Блок праворуч для відображення тагів і коментарів */}
        <Grid xs={4} item>
          {/* Відображення тагів */}
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />

          {/* Блок коментарів з тестовими даними */}
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин', // Тестовий коментар
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'Це тестовий коментар',
              },
              {
                user: {
                  fullName: 'Іван Іванов',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false} // Статус завантаження коментарів
          />
        </Grid>
      </Grid>
    </>
  );
};