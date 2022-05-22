import { Box, Button, Group, Paper, TextInput, PasswordInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import apiEndpoint from '../../Interfaces/Axios';
import { showNotification } from '@mantine/notifications'
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons'
import { useNavigate } from 'react-router-dom'

// TODO: Add error message when server is offline

export default function Register() {
  const navigate = useNavigate()

  const registerForm = useForm({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      username: (value) => (value.length ? null : 'Please Enter Username'),
      password: (value) => (value.length ? null : 'Please Enter Password'),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    },
  })

  const handleSubmit = async (values) => {
    try {
      const response = await apiEndpoint.post('/register', {
        "username": values.username,
        "password": values.password,
      })
      const responseData = response.data;
      console.log(responseData);
      showNotification({
        title: 'Register Success',
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
        <form onSubmit={registerForm.onSubmit(handleSubmit)}>
          <TextInput
            required
            label="Username"
            placeholder="Username"
            {...registerForm.getInputProps('username')}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Password"
            {...registerForm.getInputProps('password')}
          />

          <PasswordInput
            required
            label="Confirm Password"
            placeholder="Confirm Password"
            {...registerForm.getInputProps('confirmPassword')}
          />

          <Group position="center" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </form>
      </Box>
    </Paper>
  );
} 