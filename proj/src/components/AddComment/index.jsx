import React from "react";
// Імпортуємо React для створення компонента.

import styles from "./AddComment.module.scss";
// Імпортуємо стилі для компонента AddComment з файлу AddComment.module.scss.

import TextField from "@mui/material/TextField";
// Імпортуємо компонент TextField з Material-UI для створення текстового поля.

import Avatar from "@mui/material/Avatar";
// Імпортуємо компонент Avatar з Material-UI для відображення аватарки користувача.

import Button from "@mui/material/Button";
// Імпортуємо компонент Button з Material-UI для створення кнопки відправки коментаря.

export const Index = () => {
  return (
    <>
      {/* Компонент для додавання коментаря */}
      <div className={styles.root}>
        {/* Контейнер для аватарки і форми коментаря */}

        <Avatar
          classes={{ root: styles.avatar }}
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        {/* Виводимо аватар користувача. */}

        <div className={styles.form}>
          {/* Форма для введення коментаря */}

          <TextField
            label="Написати комментарій"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          {/* Текстове поле для введення коментаря. Використовуємо:
              - `label`: "Написати комментарій" - підказка для користувача.
              - `variant="outlined"`: стиль текстового поля з обведенням.
              - `maxRows={10}`: обмеження на кількість рядків.
              - `multiline`: текстове поле для введення багаторядкового тексту.
              - `fullWidth`: текстове поле займає всю ширину контейнера.
          */}

          <Button variant="contained">Відправити</Button>
          {/* Кнопка для відправки коментаря. Стиль `contained` додає кольорову заливку для кнопки. */}
        </div>
      </div>
    </>
  );
};