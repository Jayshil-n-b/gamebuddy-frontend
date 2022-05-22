// import React, {useState} from 'react'
// import { Navigate } from 'react-router-dom'

// export default function Home() {
//   const [login, setLogin] = useState(false)
//   return login ? (
//     <div>Home</div>
//   ) : <Navigate to="/login"/>
// }

import React from 'react'
import { Navigate } from 'react-router-dom';
import useUserStore from '../../Interfaces/userStore'

export default function Home() {
  const userName = useUserStore((state)=>state.username);
  return userName.length ? (
    <div>Home Of {userName}</div>
  ) : <Navigate to="/login"/>
}

