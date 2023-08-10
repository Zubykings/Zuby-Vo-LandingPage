import React from 'react'
import { allUsers } from '../../assets/allUsers'
import Cards from '../Cards'

const HomeView = () => {
  return (
    <div className='flex flex-row flex-wrap gap-x-20 gap-y-5 items-center justify-center w-full h-full'>
      {
        allUsers.map((users) => (
          <Cards key={users.id} img={users.img} names={users.names} email={users.email} state={users.state} />
        ))
      }
    </div>
  )
}

export default HomeView
