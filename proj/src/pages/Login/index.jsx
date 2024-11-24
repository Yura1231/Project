import React from "react";
import Typography from "@mui/material/Typography"; // Компонент для текстових елементів
import TextField from "@mui/material/TextField"; // Компонент для текстових полів вводу
import Paper from "@mui/material/Paper"; // Компонент для створення фонового контейнера
import Button from "@mui/material/Button"; // Компонент для кнопок

import styles from "./Login.module.scss"; // Імпорт стилів

// Головний компонент для форми логіну
export const Login = () => {
  return (
    <Paper classes={{ root: styles.root }}> {/* Обгортка форми в Paper для стилізації */}
      {/* Заголовок форми */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Вхід в акаунт
      </Typography>
      {/* Поле для введення E-Mail */}
      <TextField
        className={styles.field}  // Додається клас для стилю поля
        label="E-Mail"  // Підказка для введення
        error  // Відображає помилку в полі
        helperText="Неправильно вказана пошта"  // Пояснення помилки
        fullWidth  // Заповнює всю ширину контейнера
      />
      {/* Поле для введення пароля */}
      <TextField
        className={styles.field}  // Стиль для поля
        label="Пароль"  // Підказка для введення пароля
        fullWidth  // Заповнює всю ширину контейнера
      />
      {/* Кнопка для підтвердження входу */}
      <Button size="large" variant="contained" fullWidth>
        Вхід
      </Button>
    </Paper>
  );
};