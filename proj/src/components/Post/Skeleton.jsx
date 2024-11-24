import React from "react"; 
// Імпорт бібліотеки React для створення компонента.

import Stack from "@mui/material/Stack"; 
// Імпорт компонента `Stack` з бібліотеки Material-UI для вертикального розташування елементів з відступами між ними.

import Skeleton from "@mui/material/Skeleton"; 
// Імпорт компонента `Skeleton` з бібліотеки Material-UI для створення плейсхолдерів, які відображаються під час завантаження контенту.

import styles from "./Post.module.scss"; 
// Імпорт стилів для компонентів із файлу `Post.module.scss`.

export const PostSkeleton = () => { 
  // Функціональний компонент для відображення скелетона поста.
  return (
    <div className={styles.skeleton}>
      {/* Головний контейнер для скелетона поста зі стилями з `Post.module.scss`. */}
      
      <Stack spacing={1}>
        {/* Використання компонента `Stack` для вертикального розташування елементів зі стандартним відступом між ними. */}
        
        <Skeleton variant="rectangular" width="100%" height={300} />
        {/* Скелетон у формі прямокутника для зображення поста. 
        - `width="100%"`: зображення займає всю ширину контейнера.
        - `height={300}`: фіксована висота для зображення. */}

        <div className={styles.skeletonContent}>
          {/* Контейнер для текстової інформації поста зі стилями. */}
          
          <div className={styles.skeletonUser}>
            {/* Контейнер для відображення інформації про автора. */}
            
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />
            {/* Скелетон у формі кола, який імітує аватар користувача.
            - `width={40}` і `height={40}`: розмір кола.
            - `style={{ marginRight: 10 }}`: відступ між аватаром і текстом. */}

            <div className={styles.skeletonUserDetails}>
              {/* Контейнер для текстових деталей про користувача. */}
              
              <Skeleton variant="text" width={60} height={20} />
              {/* Скелетон для імені користувача.
              - `width={60}`: ширина текстового плейсхолдера.
              - `height={20}`: висота текстового плейсхолдера. */}

              <Skeleton variant="text" width={100} height={15} />
              {/* Скелетон для додаткової інформації (наприклад, часу створення поста).
              - `width={100}`: ширина текстового плейсхолдера.
              - `height={15}`: висота текстового плейсхолдера. */}
            </div>
          </div>

          <div className={styles.skeletonInfo}>
            {/* Контейнер для текстового контенту та тегів. */}
            
            <Skeleton variant="text" width="80%" height={45} />
            {/* Скелетон для заголовка поста.
            - `width="80%"`: заголовок займає 80% ширини контейнера.
            - `height={45}`: висота заголовка. */}

            <div className={styles.skeletonTags}>
              {/* Контейнер для тегів поста. */}
              
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              {/* Три текстових скелетона, що імітують теги поста.
              - `width={40}`: ширина кожного тегу.
              - `height={30}`: висота кожного тегу. */}
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};