import React from "react";
import { useDispatch , useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import{Navigate} from "react-router-dom"
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import {useForm} from 'react-hook-form'
import styles from "./Login.module.scss";
import { fetchAuth, selectIsAuth } from '../../redux/slices/auth';


export const Login = () => {
  const isAuth = useSelector(selectIsAuth)

  const dispath = useDispatch()
  const {register , handleSubmit , setError , formState:{errors , isValid}} = useForm({
    defaultValues:{
      email: 'kvast@gmail.com',
      password: '1234567'
    },
    mode:'onChange'
  })

  const onSubmit  = async(values)=>{
    const data = await dispath((fetchAuth(values)))
    console.log(data)


    if(!data.payload){
      return alert('Не вдалося авторизуватися')
    }
    if( 'token' in data.payload){
      window.localStorage.setItem('token' , data.payload.token)
    } else{
      alert(' Не вдалося увійти')
    }
  }
  


  if(isAuth){
    return <Navigate to ="/" />
  }


  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Вхід в акаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        label="E-Mail"
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type = "email"
        {...register('email' , {required:'Вкажіть пошту'})}
        fullWidth
      />
      <TextField className={styles.field} 
      label="Пароль" 
      error={Boolean(errors.password?.message)}
      helperText={errors.password?.message}
      {...register('password' , {required:'Вкажіть пароль'})}
      fullWidth />
      <Button type="submit" size="large" variant="contained" fullWidth>
        Вхід
      </Button>
      </form>
    </Paper>
  );
};
