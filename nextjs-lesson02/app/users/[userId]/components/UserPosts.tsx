 import Link from "next/link"
 
 type Props ={
    promise :Promise<Post[]>
 }

export default async function UserPosts({promise}:Props) {

    const posts = await promise
    const content = posts.map((post)=>(
        <>
        <article key={post.id}>
          <h2 className="p-2 font-bold text-xl">Title:- {post.title}</h2>
          <p>{post.body}</p>
        
        </article>
        </>
    ))
  return content
}
