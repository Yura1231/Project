import Container from "@mui/material/Container"; // Імпортуємо компонент Container з Material UI для зручного розміщення контенту
import { Routes, Route } from "react-router-dom"; // Імпортуємо компоненти для роутінгу (маршрутизації) з react-router-dom
import { Header } from "./components"; // Імпортуємо компонент Header, який, ймовірно, містить навігаційний бар
import { Home, FullPost, Registration, AddPost, Login } from "./pages"; // Імпортуємо сторінки для різних маршрутів

function App() {
  return (
    <>
      <Header /> {/* Рендеримо компонент Header, який може бути заголовком чи навігацією для вашого додатка */}

      <Container maxWidth="lg"> {/* Використовуємо контейнер Material UI для обмеження ширини контенту */}
        <Routes> {/* Маршрутизація сторінок */}
          <Route path="/" element={<Home />} /> {/* Головна сторінка, маршрут "/" */}
          <Route path="/posts/:id" element={<FullPost />} />  {/* Сторінка повного посту з параметром id */}
          <Route path="/add-post" element={<AddPost />} /> {/* Сторінка для створення посту */}
          <Route path="/login" element={<Login />} /> {/* Сторінка для входу */}
          <Route path="/register" element={<Registration />} /> {/* Сторінка для реєстрації */}
        </Routes>
      </Container>
    </>
  );
}

export default App;