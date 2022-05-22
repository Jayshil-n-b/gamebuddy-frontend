import { Box, Button, Group, Paper, TextInput, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form'
import React from 'react'
import apiEndpoint from '../../Interfaces/Axios';
import { showNotification } from '@mantine/notifications'
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons'
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../Interfaces/userStore';

// TODO: Add error message when server is offline

export default function Login() {
  const navigate = useNavigate()

  const setUserName = useUserStore((state)=>state.setUserName);

  const loginForm = useForm({
    initialValues: {
      username: '',
      password: '',
    },
    validate: {
      username: (value) => (value.length ? null : 'Please Enter Username'),
      password: (value) => (value.length ? null : 'Please Enter Password'),
    },
  })

  const handleSubmit = async (values) => {
    try {
      const response = await apiEndpoint.post('/login', {
        "username": values.username,
        "password": values.password 
      })
      const responseData = response.data;
      setUserName(values.username)
      showNotification({
        title: 'Login Success',
        message: 'Enjoy Gaming!!',
        color: "teal",
        icon: <CheckIcon />,
      })
      navigate('/')
    } catch (error) {
      showNotification({
        title: 'Incorrect Credentials',
        message: 'Please try again!!',
        color: "red",
        icon: <Cross1Icon />,
      })
      console.log(error.response);
    }
  }

  // style={{
  //   backgroundColor: "lightblue",
  //   padding: 12,
  //   borderRadius: 5,
  //   marginTop: 20
  // }}

  // style={{
  //   backgroundColor: "pink"
  // }}

  return (
    <Paper>
      <Box sx={{ maxWidth: 300 }} mx="auto">
        <form onSubmit={loginForm.onSubmit(handleSubmit)} >
          <TextInput
            required
            label="Username"
            placeholder="Username"
            {...loginForm.getInputProps('username')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Password"
            {...loginForm.getInputProps('password')}
          />

          <Group position="center" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Paper>
  );
} 