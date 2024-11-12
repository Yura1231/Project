import { body } from "express-validator";

export const loginValidator = [
  body('email' , 'Невірний email').isEmail(),
  body('password' , 'Невірний пароль').isLength({min:5})
 
];



export const postCreateValidation = [
  body('title','Ведіть заголовок статі').isLength({min:3}).isString(),
  body('text' , 'Ведіть текст статі').isLength({min:10}).isString(),
  body('tags' , ' Невірний формат тегів').optional().isString(),
  body('imageUrl','Невірне посилання на картинку').optional().isURL()
]

export const registerValidator = [
  body('email', 'Неправильний формат пошти').isEmail(),
  body('password', 'Пароль повинен містити мінімум 5 символів').isLength({ min: 5 }),
  body('fullName', 'Вкажіть ім’я').isLength({ min: 3 }),
  body('avatarUrl', 'Неправильне посилання на аватарку').optional().isString()
];