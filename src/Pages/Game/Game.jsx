import React from 'react'
import { useParams } from 'react-router-dom'

export default function Game() {
  const {gameid} = useParams()
  return (
    <div>Game {gameid}</div>
  )
}
