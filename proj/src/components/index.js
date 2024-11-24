// Цей файл є точкою входу для експорту всіх компонентів з папки components.
// Він дозволяє зручно імпортувати всі компоненти з цієї папки в інші файли проекту,
// без необхідності вказувати кожен компонент окремо.

export * from "./TagsBlock";
// Експортується компонент TagsBlock, який відповідає за відображення блоку з тегами.

export * from "./CommentsBlock";
// Експортується компонент CommentsBlock, що використовується для відображення блоку з коментарями.

export * from "./Post";
// Експортується компонент Post, який використовується для відображення окремого посту з усіма його атрибутами.

export * from "./AddComment";
// Експортується компонент AddComment, який дозволяє користувачам додавати нові коментарі до постів.

export * from "./SideBlock";
// Експортується компонент SideBlock, який використовується для створення бічних блоків на сторінці.

export * from "./UserInfo";
// Експортується компонент UserInfo, який відображає інформацію про користувача (аватар, ім'я та додаткові дані).

export * from "./Header";
// Експортується компонент Header, який відповідає за верхню панель навігації на сайті.