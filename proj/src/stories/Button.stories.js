import { fn } from '@storybook/test';

import { Button } from './Button';
import { Login } from '../pages';

export default {
  title: "Components/Login",
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  email: "test@example.com",
  password: "123456",
};