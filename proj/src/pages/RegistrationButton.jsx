import React from 'react'; // Імпортуємо React для створення компонента

export const RegistrationButton = () => {
  // Функція, яка відкриває сторінку реєстрації в новій вкладці
  const openRegistrationForm = () => {
    const registrationUrl = '/register'; // Шлях до сторінки реєстрації
    window.open(registrationUrl, '_blank'); // Відкриваємо сторінку реєстрації у новій вкладці
  };

  return (
    // Кнопка, яка викликає функцію openRegistrationForm при натисканні
    <button onClick={openRegistrationForm} style={styles.button}>
      Створити аккаунт {/* Текст кнопки */}
    </button>
  );
};

// Стилі для кнопки
const styles = {
  button: {
    padding: '10px 20px', // Відступи всередині кнопки
    backgroundColor: '#1976d2', // Колір фону кнопки
    color: '#fff', // Колір тексту кнопки
    border: 'none', // Без обводки
    cursor: 'pointer', // Курсор при наведенні на кнопку
    fontSize: '16px', // Розмір шрифта
    borderRadius: '5px', // Округлення кутів
  },
};