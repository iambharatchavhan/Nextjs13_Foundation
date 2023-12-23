#  Next 01 :- Data fetching fundamentals
 - 22 Dec nextjs-lessons ==> 
   - Dynamic fetching
   - Dynamic routing
   - React suspense
   - Routing - basic
# Next 02 :SSG SSR ISR
     SSG- Static side generator
     SSR- Server Side rendering
     ISR- Incremental side rendering

Help to generate SSG component that knows which type of page is rendering

```Typescript

 export async function generateStaticParams() {
  const userData : Promise<User[]> = getAllUsers()
  const users = await userData
   return users.map(user=>({
    userId:user.id.toString()
   }))
 }
 
```



