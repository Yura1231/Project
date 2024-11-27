import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import {  logout, selectIsAuth } from '../../redux/slices/auth';
import { useDispatch , useSelector } from "react-redux";

export const Header = () => {
  const dispath = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  const onClickLogout = () => {
    if(window.confirm('Ви дійсно хочите вийти ?')){
      dispath(logout())
      window.localStorage.removeItem('token' )

    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>Blog</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Написати статю</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Вийти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Вхід</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Створити акаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
