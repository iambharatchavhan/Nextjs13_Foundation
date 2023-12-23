 import getUser from "@/lib/getUser"
 import getUserPosts from "@/lib/getUserPosts"
 import { Suspense } from "react"
 import UserPosts from "./components/UserPosts"
 import Link from "next/link"
 import type { Metadata } from "next"
 import getAllUsers from "@/lib/getAllUsers"

 type Param = {
    params: {
        userId:string
    }
 }
 // For generating dynamic metadata 
 import React from 'react'
 
 export async function generateMetadata({params:{userId}}:Param):Promise<Metadata> {
    const userData :Promise<User> = getUser(userId)
    const user:User = await userData
   return {
     title:user.name,
     description: `this is the page of ${user.name}`
   }
 }
 



 export default async function UserPage({params:{userId}}:Param) {
    
    const userData : Promise<User> = getUser(userId)
    const userPostData : Promise<Post[]> = getUserPosts(userId)
     
    //old way ==>  const [user,userPosts] = await Promise.all([userData,userPostData]) 
   const user = await userData


   return (
    <section className="p-4">
    {/* old wa y <h2>{user.name}</h2>
    <UsersPost posts={user
    Posts}/> */}
    <h2 className={"p-1 font-bold text-xl"}>{user.name}</h2>
    {/**using suspense for dividing loads for promise.all */}
   <Suspense fallback={<h2>Loading...</h2>}>
    <UserPosts promise={userPostData}/>
   </Suspense>
   <p className="border border-blue-500 color blue w-32 p-2 text-center">
        <Link href="/users">Users</Link>
      </p>
    </section>
   )
 }
 
 export async function generateStaticParams() {
  const userData : Promise<User[]> = getAllUsers()
  const users = await userData
   return users.map(user=>({
    userId:user.id.toString()
   }))
 }