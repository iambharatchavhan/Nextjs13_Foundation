import Link from "next/link"


export default function Home() {
  return (
    <main className="">
     <h1>Home Page</h1>
      <p className="border border-blue-500 color blue w-32 p-2 text-center">
        <Link href="/users">Users</Link>
      </p>
    </main>
  )
}
