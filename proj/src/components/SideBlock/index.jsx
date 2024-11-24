import React from "react";
// Імпортуємо бібліотеку React для створення компонента SideBlock.

import styles from "./SideBlock.module.scss";
// Імпортуємо стилі для компонента SideBlock з файлу SideBlock.module.scss.

import Typography from "@mui/material/Typography";
// Імпортуємо компонент Typography з бібліотеки Material-UI для стилізованого тексту.

import Paper from "@mui/material/Paper";
// Імпортуємо компонент Paper з бібліотеки Material-UI для створення картки з фоном.

export const SideBlock = ({ title, children }) => {
  // Компонент SideBlock приймає два пропси:
  // title - заголовок блоку,
  // children - дочірні елементи, які будуть відображатися всередині блоку (наприклад, списки або інші компоненти).

  return (
    <Paper classes={{ root: styles.root }}>
      {/* Компонент Paper створює контейнер з білим фоном та тінню. Використовуємо стилі з класу root. */}

      <Typography variant="h6" classes={{ root: styles.title }}>
        {title}
      </Typography>
      {/* Компонент Typography для заголовка. Використовуємо стиль title для додавання відступів навколо заголовка. */}

      {children}
      {/* Виводимо дочірні елементи, які передані в компонент. Це можуть бути різні компоненти або текст. */}
    </Paper>
  );
};