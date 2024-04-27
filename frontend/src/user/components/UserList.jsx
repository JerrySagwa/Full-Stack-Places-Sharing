import React from 'react'
import UserItem from './UserItem'

const UserList = ({users}) => {

  if (!users || users.length === 0) {
    return (
      <div className='mx-auto text-3xl text-center font-bold text-red-700'>No Users Found.</div>
    )
  }

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-6 justify-center'>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <UserItem {...user} />
            </div>
          )
        })
      }      
    </div>
  )
}

export default UserList
