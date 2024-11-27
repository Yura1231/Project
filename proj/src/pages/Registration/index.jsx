import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { fetchAuth, fetchRegister, selectIsAuth } from '../../redux/slices/auth';
import styles from './Login.module.scss';
import {useForm} from 'react-hook-form'
import { Navigate } from 'react-router-dom';
import { useDispatch ,  useSelector } from 'react-redux';


export const Registration = () => {

  const isAuth = useSelector(selectIsAuth)

  const dispath = useDispatch()
  const {register , handleSubmit , setError , formState:{errors , isValid}} = useForm({
    defaultValues:{
      fullName: 'Василій ППр',
      email: 'kvast@gmail.com',
      password: '1234'
    },
    mode:'onChange'
  })

  const onSubmit  = async(values)=>{
    const data = await dispath((fetchRegister(values)))

    console.log(data)


    if(!data.payload){
      return alert('Не вдалося зарегіструватися')
    }
    if( 'token' in data.payload){
      window.localStorage.setItem('token' , data.payload.token)
    } 
  }
  


  if(isAuth){
    return <Navigate to ="/" />
  }
  return (
    <Paper classes={{ root: styles.root }}>
      <Typography classes={{ root: styles.title }} variant="h5">
        Створення Акаунта
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField 
        error={Boolean(errors.fullName?.message)}
        helperText={errors.fullName?.message}
        
        {...register('fullName' , {required:'Вкажіть повне імя'})} 
        className={styles.field} 
        label="Повне імя" 
        fullWidth />
      <TextField 
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        type = "email"
        {...register('email' , {required:'Вкажіть пошту'})} 
        className={styles.field} label="E-Mail" fullWidth />
      <TextField 
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        type = "password"
        {...register('password' , {required:'Вкажіть  пароль'})} 
        className={styles.field} label="Пароль" fullWidth />
      <Button type  = "submit"size="large" variant="contained" fullWidth>
        Регістрація
      </Button>
      </form>
    </Paper>
  );
};
