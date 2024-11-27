import React from "react";
import { Post } from "../components/Post"; // Шлях до вашого компонента

export default {
  title: "Components/Post", // Назва компонента в Storybook
  component: Post,
};

const Template = (args) => <Post {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Заголовок поста",
  imageUrl: "https://via.placeholder.com/150",
  user: { fullName: "Іван Іванов", avatarUrl: "https://via.placeholder.com/50" },
  createdAt: "2024-11-26",
  viewsCount: 100,
  commentsCount: 10,
  tags: ["React", "Storybook", "JavaScript"],
};
