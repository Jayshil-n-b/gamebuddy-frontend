import { Image, Card, Text, SimpleGrid, Group } from '@mantine/core'
import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import useUserStore from '../../Interfaces/userStore'

export default function GameCard({id, src, name}) {
    const usertoken = sessionStorage.getItem('gameBuddyToken')

    const navigate = useNavigate()

    const handelNav = () => {
        navigate(`/game/${id}`, {replace: true})
        navigate(0)
    }

  return (
        <Card shadow='xs' p='md' onClick={handelNav} sx={{
            '&:hover': {
                backgroundColor: '#3e4048',
            }
        }} style={{padding: 20}}>
            <Card.Section>
                <Image id={id} src={src}/>
            </Card.Section>
            <Card.Section>
                 <Group position='center'>{name}</Group>
            </Card.Section>
        </Card>
  )
}
