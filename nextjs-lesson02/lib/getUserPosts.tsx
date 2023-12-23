
export default async function getUserPosts(userId:string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{next:{revalidate:60}})
       // it will revalidate cache data ..next automatically cache the data 

    if(!res.ok) undefined
  return res.json()
}
