import React from 'react'; // Імпорт React для створення компонента
import Typography from '@mui/material/Typography'; // Компонент для тексту
import TextField from '@mui/material/TextField'; // Компонент для текстових полів
import Paper from '@mui/material/Paper'; // Компонент для контейнера з фоном
import Button from '@mui/material/Button'; // Компонент для кнопки
import Avatar from '@mui/material/Avatar'; // Компонент для аватара

import styles from './Login.module.scss'; // Імпорт стилів

// Головний компонент для форми реєстрації
export const Registration = () => {
  return (
    <Paper classes={{ root: styles.root }}> {/* Контейнер з фоном */}
      {/* Заголовок форми */}
      <Typography classes={{ root: styles.title }} variant="h5">
        Створення Акаунта
      </Typography>
      {/* Блок з аватаром користувача */}
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} /> {/* Аватар з розмірами 100x100 */}
      </div>
      {/* Поле для введення повного імені */}
      <TextField className={styles.field} label="Повне імя" fullWidth />
      {/* Поле для введення E-Mail */}
      <TextField className={styles.field} label="E-Mail" fullWidth />
      {/* Поле для введення пароля */}
      <TextField className={styles.field} label="Пароль" fullWidth />
      {/* Кнопка для реєстрації */}
      <Button size="large" variant="contained" fullWidth>
        Регістрація
      </Button>
    </Paper>
  );
};