import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";


export const metadata: Metadata = {
    title:'Users'
}



export default async function UsersPage() {
   const userData : Promise<User[]> = getAllUsers()
   const users = await userData


   const content = (<section>
    <h1 className="border border-blue-500 color blue w-32 p-2 text-center"><Link href='/'>Go to home</Link></h1>
     
     {users.map((user)=>(
      <>
      <p key={user.id} className="text-xl font-bold p-2"><Link href={`/users/${user.id}`}>{user.name}</Link></p>
      </>
     ))}
   </section>)
  return content
}


