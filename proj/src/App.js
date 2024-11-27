import Container from "@mui/material/Container";
import React from 'react';
import { Routes , Route } from "react-router-dom";
import { Header } from "./components";
import { useDispatch , useSelector } from "react-redux";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {


  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(()=>{
    dispath(fetchAuthMe())
  } , [])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts/:id" element={<FullPost/>}/>  
        <Route path="/add-post" element={<AddPost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>

          

       </Routes>
       
      </Container>
    </>
  );
}

export default App;
