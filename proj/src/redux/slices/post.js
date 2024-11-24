// Імпортуємо необхідні функції для роботи з Redux Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'; // Імпорт інстансу axios для роботи з API

// Асинхронний thunk для отримання постів з API
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts'); // Отримуємо дані про пости
    return data; // Повертаємо отримані дані
});

// Асинхронний thunk для отримання тегів з API
export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
    const { data } = await axios.get('/tags'); // Отримуємо дані про теги
    return data; // Повертаємо отримані дані
});

// Початковий стан для постів та тегів
const initialState = {
    posts: {
        items: [], // Масив для збереження постів
        status: 'loading', // Статус завантаження постів (початково "loading")
    },

    tags: {
        items: [], // Масив для збереження тегів
        status: 'loading', // Статус завантаження тегів (початково "loading")
    },
};

// Створюємо slice для керування станом постів та тегів
const PostSlice = createSlice({
    name: 'posts', // Ім'я slice
    initialState, // Початковий стан
    reducers: {}, // Тут можуть бути сінгл-редьюсери, але наразі вони не використовуються
    extraReducers: {
        // Описуємо редюсери для асинхронних thunk'ів
        [fetchPosts.pending]: (state) => {
            state.posts.items = []; // Очищаємо пости
            state.posts.status = 'load'; // Оновлюємо статус на "load" під час запиту
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts.items = action.payload; // Зберігаємо отримані пости в state
            state.posts.status = 'loaded'; // Оновлюємо статус на "loaded" після успішного запиту
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []; // Очищаємо пости у випадку помилки
            state.posts.status = 'error'; // Оновлюємо статус на "error"
        },
        [fetchTags.pending]: (state) => {
            state.tags.items = []; // Очищаємо теги
            state.tags.status = 'load'; // Оновлюємо статус на "load" під час запиту
        },
        [fetchTags.fulfilled]: (state, action) => {
            state.tags.items = action.payload; // Зберігаємо отримані теги в state
            state.tags.status = 'loaded'; // Оновлюємо статус на "loaded" після успішного запиту
        },
        [fetchTags.rejected]: (state) => {
            state.tags.items = []; // Очищаємо теги у випадку помилки
            state.tags.status = 'error'; // Оновлюємо статус на "error"
        },
    },
});

// Експортуємо редюсер для використання в store
export const postsReducer = PostSlice.reducer;