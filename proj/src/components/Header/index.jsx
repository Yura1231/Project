import React from 'react';
// React використовується для створення компонентів.

import Button from '@mui/material/Button';
// Кнопка з бібліотеки Material-UI. Підтримує різні варіанти стилів і параметрів.

import { Link } from 'react-router-dom';
// Link — компонент для створення внутрішніх переходів у додатку.

import styles from './Header.module.scss';
// Імпортуються стилі, написані у файлі SCSS. Підключення через CSS-модулі.

import Container from '@mui/material/Container';
// Контейнер з Material-UI для обмеження ширини компонента до певного розміру.

export const Header = () => {
  // Функціональний компонент `Header` відображає верхню панель додатку.

  const isAuth = false;
  // Змінна для перевірки, чи користувач автентифікований. Тимчасове значення `false`.

  const onClickLogout = () => {
    // Обробник для кнопки виходу. Поки що не реалізований.
  };

  return (
    <div className={styles.root}>
      {/* Основний контейнер хедера з підключеними стилями */}
      <Container maxWidth="lg">
        {/* Внутрішній контейнер, обмежений шириною до "large" для гарного вигляду */}
        <div className={styles.inner}>
          {/* Внутрішній блок, що містить логотип і кнопки */}
          <a className={styles.logo} href="/">
            {/* Логотип, який веде на головну сторінку */}
            <div>Blog</div>
          </a>
          <div className={styles.buttons}>
            {/* Блок із кнопками */}
            {isAuth ? (
              // Якщо користувач увійшов у систему:
              <>
                <Link to="/posts/create">
                  {/* Кнопка для переходу до створення нової статті */}
                  <Button variant="contained">Написати статтю</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  {/* Кнопка для виходу із системи */}
                  Вийти
                </Button>
              </>
            ) : (
              // Якщо користувач не автентифікований:
              <>
                <Link to="/login">
                  {/* Кнопка для переходу на сторінку входу */}
                  <Button variant="outlined">Вхід</Button>
                </Link>
                <Link to="/register">
                  {/* Кнопка для переходу на сторінку реєстрації */}
                  <Button variant="contained">Створити акаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};