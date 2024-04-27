import React from 'react'
import UserList from '../components/UserList'

const Users = () => {

  const USERS = [
    {id: 'u1', name: 'JerrySagwa', placeCount: 3, image: 'https://yt3.ggpht.com/ytc/AIdro_nbpmO4qfGbsMpTI1L80F4ObHRJxHP5qYz_PNHdaXUT3OY=s68-c-k-c0x00ffffff-no-rj'},
    {id: 'u2', name: 'Jonny', placeCount: 1, image: 'https://yt3.ggpht.com/ytc/AIdro_nbpmO4qfGbsMpTI1L80F4ObHRJxHP5qYz_PNHdaXUT3OY=s68-c-k-c0x00ffffff-no-rj'}
  ]

  return (
    <div className='mt-10 w-[80%] mx-auto'>
      <UserList users={USERS} />
    </div>
  )
}

export default Users
