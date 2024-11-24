// Імпортуємо необхідні функції для створення store
import { configureStore } from "@reduxjs/toolkit";
// Імпортуємо редюсер для постів
import { postsReducer } from "./slices/post";

// Створюємо Redux store
const store = configureStore({
    reducer: {
        // Додаємо редюсер для постів в store
        posts: postsReducer, // postsReducer відповідає за стан постів
    },
});

// Експортуємо store для використання в інших частинах додатку
export default store;