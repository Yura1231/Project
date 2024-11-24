import React from 'react';
import TextField from '@mui/material/TextField'; // Компонент для вводу тексту
import Paper from '@mui/material/Paper'; // Компонент для створення контейнера з фоном
import Button from '@mui/material/Button'; // Компонент для кнопок
import SimpleMDE from 'react-simplemde-editor'; // Редактор для вводу Markdown тексту
import 'easymde/dist/easymde.min.css'; // Стилі для редактора
import styles from './AddPost.module.scss'; // Імпорт стилів для цього компонента

// Головний компонент для створення нового поста
export const AddPost = () => {
  const imageUrl = ''; // Змінна для зберігання URL зображення
  const [value, setValue] = React.useState(''); // Стейт для зберігання тексту поста

  // Обробник для зміни файлу
  const handleChangeFile = () => { };

  // Обробник для видалення зображення
  const onClickRemoveImage = () => { };

  // Функція для оновлення значення тексту в редакторі
  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  // Налаштування для редактора
  const options = React.useMemo(
    () => ({
      spellChecker: false, // Вимикаємо перевірку орфографії
      maxHeight: '400px', // Встановлюємо максимальну висоту для редактора
      autofocus: true, // Автоматичне фокусування на редакторі
      placeholder: 'Введите текст...', // Текст підказки в редакторі
      status: false, // Вимикаємо статус-бар
      autosave: {
        enabled: true, // Увімкнення автоматичного збереження
        delay: 1000, // Затримка перед автоматичним збереженням
      },
    }),
    [],
  );

  // JSX для рендерингу форми створення поста
  return (
    <Paper style={{ padding: 30 }}>
      {/* Кнопка для завантаження зображення */}
      <Button variant="outlined" size="large">
        Загрузить превью
      </Button>
      <input type="file" onChange={handleChangeFile} hidden /> {/* Секретний інпут для завантаження файлу */}

      {/* Якщо зображення завантажене, показуємо кнопку для видалення */}
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Удалить
        </Button>
      )}

      {/* Виведення зображення, якщо воно завантажене */}
      {imageUrl && (
        <img className={styles.image} src={`http://localhost:4444${imageUrl}`} alt="Uploaded" />
      )}
      <br />
      <br />
      {/* Поле для введення заголовка поста */}
      <TextField
        classes={{ root: styles.title }}
        variant="standard"
        placeholder="Заголовок статьи..."
        fullWidth
      />
      {/* Поле для введення тегів поста */}
      <TextField classes={{ root: styles.tags }} variant="standard" placeholder="Тэги" fullWidth />

      {/* Редактор для введення тексту поста */}
      <SimpleMDE className={styles.editor} value={value} onChange={onChange} options={options} />

      {/* Кнопки для публікації та скасування */}
      <div className={styles.buttons}>
        <Button size="large" variant="contained">
          Опубликовать
        </Button>
        <a href="/">
          <Button size="large">Отмена</Button>
        </a>
      </div>
    </Paper>
  );
};