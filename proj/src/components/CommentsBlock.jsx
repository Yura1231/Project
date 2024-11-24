import React from "react";
// Імпорт React для створення функціонального компонента.

import { SideBlock } from "./SideBlock";
// Локальний компонент `SideBlock`, який використовується як контейнер для заголовка і списку коментарів.

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Skeleton from "@mui/material/Skeleton";
// Компоненти Material-UI для створення списків:
// - `List` і `ListItem` для структуризації списків,
// - `ListItemAvatar` і `Avatar` для відображення аватарки користувача,
// - `ListItemText` для відображення текстової інформації (наприклад, імені та коментаря),
// - `Divider` для розділення елементів списку,
// - `Skeleton` для завантажувальних плейсхолдерів.

export const CommentsBlock = ({ items, children, isLoading = true }) => {
  // Функціональний компонент `CommentsBlock` для відображення списку коментарів.
  // Приймає три пропси:
  // - `items` — масив об'єктів із даними про коментарі (користувач, текст коментаря),
  // - `children` — дочірні елементи, які додаються до списку (наприклад, форма додавання коментаря),
  // - `isLoading` — прапорець, який вказує, чи дані ще завантажуються.

  return (
    <SideBlock title="Коментарі">
      {/* Використання компонента `SideBlock` для заголовка і оформлення секції. */}
      <List>
        {/* Список коментарів. Якщо дані завантажуються (`isLoading`), генерується 
        масив із 5 порожніх елементів для плейсхолдерів. Інакше використовується масив `items`. */}
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          // Ітерація по масиву елементів (або плейсхолдерів) для формування списку.
          <React.Fragment key={index}>
            {/* Використання `React.Fragment` для групування елемента списку і розділювача (`Divider`).
            Атрибут `key` додається для кожного елемента списку для забезпечення унікальності. */}
            <ListItem alignItems="flex-start">
              {/* Елемент списку з вирівнюванням контенту по верхньому краю. */}
              <ListItemAvatar>
                {/* Аватарка коментаря (завантажувальний плейсхолдер або зображення). */}
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                  // Якщо дані завантажуються, відображається круглий плейсхолдер (Skeleton).
                ) : (
                  <Avatar
                    alt={obj.user.fullName}
                    src={obj.user.avatarUrl}
                  />
                  // Якщо дані вже завантажені, відображається аватарка користувача.
                )}
              </ListItemAvatar>
              {isLoading ? (
                // Якщо дані завантажуються:
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {/* Вертикальне розташування скелетонів для імені та тексту коментаря. */}
                  <Skeleton variant="text" height={25} width={120} />
                  {/* Плейсхолдер для імені користувача. */}
                  <Skeleton variant="text" height={18} width={230} />
                  {/* Плейсхолдер для тексту коментаря. */}
                </div>
              ) : (
                // Якщо дані завантажені:
                <ListItemText
                  primary={obj.user.fullName}
                  secondary={obj.text}
                />
                // Відображення імені користувача (primary) і тексту коментаря (secondary).
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
            {/* Розділювач між елементами списку. Вставляється всередині списку. */}
          </React.Fragment>
        ))}
      </List>
      {children}
      {/* Дочірні елементи передаються в кінець списку (наприклад, форма для введення нового коментаря). */}
    </SideBlock>
  );
};