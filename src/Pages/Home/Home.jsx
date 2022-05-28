import { Text } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

export default function Home() {
  const userToken = sessionStorage.getItem('gameBuddyToken')

  useEffect(() => {
    console.log(`Home ${userToken}` );  
  }, [])
  
  if (!userToken) return <Navigate to="/login" />
  
  return (
    <>
      <Text>Home</Text>
    </>
  )
}

