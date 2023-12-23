import React from 'react'

export default async function getAllUsers() {
       const res = await fetch('https://jsonplaceholder.typicode.com/users')
       if(!res.ok) undefined

  return res.json()
  // we are not putting try catch here because we are using error boundaries provided by next js
}
