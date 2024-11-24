import React from 'react';
// Імпортуємо бібліотеку React для створення компонента UserInfo.

import styles from './UserInfo.module.scss';
// Імпортуємо стилі для компонента UserInfo з файлу UserInfo.module.scss.

export const UserInfo = ({ avatarUrl, fullName, additionalText }) => {
  // Компонент UserInfo приймає три пропси:
  // avatarUrl - URL зображення аватара користувача,
  // fullName - повне ім'я користувача,
  // additionalText - додаткова інформація, наприклад, дата або інші деталі.

  return (
    <div className={styles.root}>
      {/* Головний контейнер для компонента, використовує стилі з класу root. */}

      <img className={styles.avatar}
        src={avatarUrl || '/noavatar.png'}
        alt={fullName}
      />
      {/* Виводимо аватар користувача:
           - Якщо avatarUrl передано, використовуємо цей URL для зображення.
           - Якщо avatarUrl не передано, використовуємо зображення за замовчуванням ("/noavatar.png").
           - Атрибут alt містить ім'я користувача для забезпечення доступності. */}

      <div className={styles.userDetails}>
        {/* Контейнер для текстової інформації про користувача, стилізований класом userDetails. */}

        <span className={styles.userName}>{fullName}</span>
        {/* Виводимо повне ім'я користувача, застосовуючи стиль userName. */}

        <span className={styles.additional}>{additionalText}</span>
        {/* Виводимо додаткову інформацію (наприклад, дату або інші деталі), застосовуючи стиль additional. */}
      </div>
    </div>
  );
};