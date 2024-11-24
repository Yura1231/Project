import React from "react";
// Імпорт React для створення функціонального компонента.

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TagIcon from "@mui/icons-material/Tag";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
// Імпортуються компоненти Material-UI:
// - `List` і `ListItem` для створення списків,
// - `ListItemButton` для інтерактивних елементів списку,
// - `ListItemIcon` і `TagIcon` для відображення іконки,
// - `ListItemText` для тексту всередині елементів,
// - `Skeleton` для відображення завантажувальних плейсхолдерів.

import { SideBlock } from "./SideBlock";
// Імпорт локального компонента `SideBlock`, який виступає контейнером із заголовком.

export const TagsBlock = ({ items, isLoading = true }) => {
  // Функціональний компонент `TagsBlock` для відображення списку тегів.
  // Приймає два пропси:
  // - `items` — масив тегів для відображення,
  // - `isLoading` — прапорець, який вказує, чи дані ще завантажуються.

  return (
    <SideBlock title="Теги">
      {/* Використання компонента `SideBlock` для обгортки тегів. */}
      <List>
        {/* Список тегів. Якщо дані завантажуються (`isLoading`), генерується 
        масив із 5 порожніх елементів для плейсхолдерів. Інакше використовується масив `items`. */}
        {(isLoading ? [...Array(5)] : items).map((name, i) => (
          // Ітерація по елементах масиву.
          // Якщо завантаження не завершене, `name` буде `undefined`.
          <a
            // Обгортка кожного елемента списку у посилання.
            // Веде на сторінку, пов’язану з конкретним тегом.
            style={{ textDecoration: "none", color: "black" }}
            // Інлайн-стилі для видалення підкреслення і встановлення чорного кольору тексту.
            href={`/tags/${name}`}
          // Формування URL, заснованого на назві тегу.
          >
            <ListItem key={i} disablePadding>
              {/* Елемент списку `ListItem`, який видаляє стандартні відступи. */}
              <ListItemButton>
                {/* Інтерактивна кнопка всередині елемента списку. */}
                <ListItemIcon>
                  {/* Іконка для кожного елемента списку. */}
                  <TagIcon />
                  {/* Використовується іконка "тег" із бібліотеки Material-UI. */}
                </ListItemIcon>
                {isLoading ? (
                  // Якщо дані ще завантажуються:
                  <Skeleton width={100} />
                  // Відображається плейсхолдер у вигляді прямокутника шириною 100px.
                ) : (
                  // Якщо дані вже завантажені:
                  <ListItemText primary={name} />
                  // Відображається текстовий вміст з назвою тегу.
                )}
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </SideBlock>
  );
};