import React from 'react'; 
// Імпорт бібліотеки React для створення функціонального компонента.

import clsx from 'clsx'; 
// Імпорт бібліотеки clsx для умовного об'єднання класів CSS.

import IconButton from '@mui/material/IconButton'; 
// Імпорт компонента кнопки з Material-UI для інтерактивних дій.

import DeleteIcon from '@mui/icons-material/Clear'; 
// Іконка для кнопки "Видалити".

import EditIcon from '@mui/icons-material/Edit'; 
// Іконка для кнопки "Редагувати".

import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined'; 
// Іконка для відображення кількості переглядів.

import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'; 
// Іконка для відображення кількості коментарів.

import { Link } from 'react-router-dom'; 
// Імпорт компонента для навігації між сторінками за допомогою посилань.

import styles from './Post.module.scss'; 
// Імпорт модульних стилів для компонента.

import { UserInfo } from '../UserInfo'; 
// Імпорт компонента `UserInfo` для відображення інформації про користувача.

import { PostSkeleton } from './Skeleton'; 
// Імпорт компонента `PostSkeleton` для плейсхолдера під час завантаження.

export const Post = ({ 
  id,             // Унікальний ідентифікатор поста.
  title,          // Заголовок поста.
  createdAt,      // Дата створення поста.
  imageUrl,       // URL зображення, пов'язаного з постом.
  user,           // Об'єкт із даними користувача.
  viewsCount,     // Кількість переглядів поста.
  commentsCount,  // Кількість коментарів до поста.
  tags,           // Масив тегів, пов'язаних із постом.
  children,       // Додатковий контент, переданий у компонент.
  isFullPost,     // Логічний прапорець для повної версії поста.
  isLoading,      // Логічний прапорець, що вказує на завантаження.
  isEditable,     // Логічний прапорець, що визначає, чи доступне редагування.
}) => {
  if (isLoading) {
    // Якщо пост ще завантажується, повертається компонент `PostSkeleton`.
    return <PostSkeleton />;
  }

  const onClickRemove = () => {
    // Обробник кліку для кнопки "Видалити"
  };

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {/* Основний контейнер поста. 
      Використовує `clsx` для динамічного додавання класу `rootFull`, якщо це повна версія поста. */}
      
      {isEditable && (
        <div className={styles.editButtons}>
          {/* Контейнер для кнопок редагування та видалення поста, якщо він редагований. */}
          
          <Link to={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}

      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      {/* Відображення зображення, якщо його URL надано. 
      Клас `imageFull` додається для повної версії поста. */}

      <div className={styles.wrapper}>
        {/* Контейнер для основного контенту поста. */}

        <UserInfo {...user} additionalText={createdAt} />
        {/* Використання компонента `UserInfo` для відображення інформації про автора поста. */}

        <div className={styles.indention}>
          {/* Відступ для вмісту поста. */}
          
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {/* Заголовок поста. Для повної версії використовується клас `titleFull`. */}
            
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
            {/* Якщо це повна версія, заголовок відображається як текст. 
            В іншому випадку заголовок є посиланням на повну версію поста. */}
          </h2>

          <ul className={styles.tags}>
            {/* Список тегів, пов'язаних із постом. */}
            
            {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
            {/* Кожен тег відображається як посилання на сторінку відповідного тегу. */}
          </ul>

          {children && <div className={styles.content}>{children}</div>}
          {/* Додатковий контент відображається лише, якщо він переданий у компонент. */}

          <ul className={styles.postDetails}>
            {/* Список деталей поста, включаючи кількість переглядів та коментарів. */}
            
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
              {/* Відображення кількості переглядів із відповідною іконкою. */}
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
              {/* Відображення кількості коментарів із відповідною іконкою. */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};